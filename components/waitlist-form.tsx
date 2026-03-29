"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { motion, AnimatePresence } from "motion/react";

const placeholders = [
  "you@example.com",
  "your@email.com",
  "hello@you.com",
];

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setMessage("");

    // Let the vanish animation play (~700ms), then show loading & fire the request
    const submittedEmail = email;
    const submittedHoneypot = honeypot;

    setTimeout(async () => {
      setStatus("loading");

      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: submittedEmail, company: submittedHoneypot }),
        });

        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setCount(data.count ?? null);
        } else {
          setStatus("error");
          setMessage(data.error || "Something went wrong. Please try again.");
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    }, 700);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Honeypot — hidden from real users, filled by bots */}
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 h-12"
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 12 }}
            >
              <circle cx="10" cy="10" r="10" fill="#1a1a1a" />
              <motion.path
                d="M6 10.5L8.5 13L14 7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />
            </motion.svg>
            <span className="text-[#1a1a1a] font-medium">
              You&apos;re in{count ? ` — #${count} on the list` : ""}! We&apos;ll be in touch.
            </span>
          </motion.div>
        ) : status === "loading" ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 h-12"
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="9"
                cy="9"
                r="7.5"
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />
              <path
                d="M16.5 9a7.5 7.5 0 0 0-7.5-7.5"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
            <span className="text-[#6B7280] text-sm">
              Hang tight...
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <AnimatePresence>
              {status === "error" && message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-3 text-sm text-red-500 text-center"
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
