import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendWelcomeEmail(to: string): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: '"Tilde" <denizlapsekili@gmail.com>',
      to,
      subject: "You're on the Tilde waitlist!",
      text: [
        "Hey!",
        "",
        "Thanks for joining the Tilde waitlist — you're in.",
        "",
        "We'll let you know when you can get started.",
        "",
        "— Deniz",
      ].join("\n"),
    });
    return true;
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    return false;
  }
}
