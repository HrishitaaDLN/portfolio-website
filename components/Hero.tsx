import HeroRobot from "@/components/visuals/HeroRobot";
import TypewriterRoles from "@/components/TypewriterRoles";
import MagneticButton from "@/components/ui/MagneticButton";
import { PERSON } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 pb-20 sm:pb-16 overflow-hidden"
    >
      <div
        className="orb orb-cyan w-48 h-48 sm:w-72 sm:h-72 -top-10 -left-16 md:left-10 opacity-40 sm:opacity-70"
        aria-hidden
      />
      <div
        className="orb orb-violet w-56 h-56 sm:w-80 sm:h-80 bottom-10 right-0 md:right-16 opacity-30 sm:opacity-60"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="min-w-0">
          <p
            className="font-mono text-cyan-accent text-xs sm:text-sm mb-3 sm:mb-4 hero-enter"
            style={{ ["--enter-delay" as string]: "0ms" }}
          >
            Software Engineer - AI Portfolio
          </p>
          <h1
            className="font-display text-[2rem] leading-tight sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 hero-enter break-words"
            style={{ ["--enter-delay" as string]: "120ms" }}
          >
            Hi, I&apos;m{" "}
            <span className="text-shimmer">{PERSON.shortName}</span>
          </h1>
          <div className="hero-enter" style={{ ["--enter-delay" as string]: "220ms" }}>
            <TypewriterRoles />
          </div>
          <p
            className="font-mono text-xs sm:text-sm text-white/50 mb-4 sm:mb-6 hero-enter"
            style={{ ["--enter-delay" as string]: "280ms" }}
          >
            {PERSON.education}
          </p>
          <p
            className="text-white/60 text-base sm:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed hero-enter"
            style={{ ["--enter-delay" as string]: "360ms" }}
          >
            Building intelligent systems at the intersection of AI, data, and impact.
          </p>
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 hero-enter"
            style={{ ["--enter-delay" as string]: "440ms" }}
          >
            <MagneticButton
              href="#projects"
              className="btn-glow w-full sm:w-auto text-center px-6 py-3 rounded-lg font-mono text-sm bg-cyan-accent/10 border border-cyan-accent/50 text-cyan-accent hover:bg-cyan-accent/20"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              download="Lakshmi_Naga_Hrishitaa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full sm:w-auto text-center px-6 py-3 rounded-lg font-mono text-sm border border-violet-accent/50 text-violet-accent hover:bg-violet-accent/10"
            >
              Download Resume
            </MagneticButton>
          </div>
        </div>

        <div
          className="hidden lg:block hero-enter"
          style={{ ["--enter-delay" as string]: "320ms" }}
        >
          <HeroRobot />
        </div>
      </div>

      <a
        href="#about"
        className="scroll-cue absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-cyan-accent"
        aria-label="Scroll to about"
      >
        Scroll
      </a>
    </section>
  );
}
