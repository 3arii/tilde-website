import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tilde — The Open Source Productivity App",
  description:
    "Join the waitlist for Tilde, the open source productivity tool built for people who think in systems.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tilde — The Open Source Productivity App",
    description:
      "Join the waitlist for Tilde, the open source productivity tool built for people who think in systems.",
    url: "https://tilde.fyi",
    siteName: "Tilde",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilde — The Open Source Productivity App",
    description:
      "Join the waitlist for Tilde, the open source productivity tool built for people who think in systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
