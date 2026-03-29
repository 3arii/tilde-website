import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { sendWelcomeEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let indexEnsured = false;

async function ensureIndex() {
  if (indexEnsured) return;
  const db = await getDb();
  await db.collection("waitlist").createIndex({ email: 1 }, { unique: true });
  indexEnsured = true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot — bots fill this hidden field
    if (body.company) {
      return NextResponse.json({ success: true, count: 0 });
    }

    const email = String(body.email ?? "").trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await ensureIndex();
    const db = await getDb();
    const collection = db.collection("waitlist");

    // Check duplicate
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 409 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

    await collection.insertOne({
      email,
      createdAt: new Date(),
      ip,
    });

    const count = await collection.countDocuments();

    // Best-effort email — don't fail the request if it errors
    await sendWelcomeEmail(email);

    return NextResponse.json({ success: true, count });
  } catch (error: unknown) {
    // Handle duplicate key error from race condition
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: number }).code === 11000
    ) {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 409 }
      );
    }

    console.error("Waitlist POST error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const count = await db.collection("waitlist").countDocuments();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Waitlist GET error:", error);
    return NextResponse.json({ count: 0 });
  }
}
