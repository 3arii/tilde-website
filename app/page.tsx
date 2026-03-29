import { InteractiveDotBackground } from "@/components/interactive-dot-background";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn } from "@/components/fade-in";
import { GithubIcon } from "@/components/icons";
import { WaitlistCaption } from "@/components/waitlist-caption";


export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <InteractiveDotBackground />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-6">
        <FadeIn delay={0}>
          <span className="text-2xl font-bold text-[#1a1a1a] select-none">
            ~
          </span>
        </FadeIn>
        <FadeIn delay={0}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a1a1a] opacity-70 hover:opacity-100 transition-opacity"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </FadeIn>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-[560px] text-center">
          {/* Logo */}
          <FadeIn delay={0} duration={0.5}>
            <div className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] mb-12 select-none">
              ~
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Hey, I&apos;m Deniz.
            </h1>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.4}>
            <p className="mt-4 text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-[480px] mx-auto">
              I&apos;m building the best productivity app — and open sourcing
              it. Drop your email to join the waitlist.
            </p>
          </FadeIn>

          {/* Email form */}
          <FadeIn delay={0.6} className="mt-10">
            <WaitlistForm />
          </FadeIn>

          {/* Social proof */}
          <FadeIn delay={0.8}>
            <WaitlistCaption />
          </FadeIn>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-center gap-3 px-6 sm:px-8 py-6 text-sm text-[#9CA3AF]">
        <FadeIn delay={0.8}>
          <div className="flex items-center gap-3">
            <span>tilde.fyi</span>
            <span className="text-[#E5E7EB]">·</span>
            <a
              href="https://x.com/DLapsekili"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B7280] transition-colors underline-offset-4 hover:underline"
            >
              twitter
            </a>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}
