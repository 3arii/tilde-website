"use client";

import { useEffect, useState } from "react";

const captions: Record<number, string> = {
  0: "Be the first one on the waitlist 🤩",
  1: "Don't leave the first person hanging — be #2 on the waitlist",
};

function getCaption(count: number): string {
  if (count in captions) return captions[count];
  return `Join ${count} others on the waitlist`;
}

export function WaitlistCaption() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));
  }, []);

  if (count === null) return null;

  return (
    <p className="mt-6 text-sm text-[#9CA3AF]">
      {getCaption(count)}
    </p>
  );
}
