import HeroRobot from "@/components/visuals/HeroRobot";
import TypewriterRoles from "@/components/TypewriterRoles";
import { PERSON } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="orb orb-cyan w-72 h-72 -top-10 -left-16 md:left-10 opacity-70"
        aria-hidden
      />
      <div
        className="orb orb-violet w-80 h-80 bottom-10 right-0 md:right-16 opacity-60"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="font-mono text-cyan-accent text-sm mb-4 hero-enter"
            style={{ ["--enter-delay" as string]: "0ms" }}
          >
            Software Engineer - AI Portfolio
          </p>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 hero-enter"
            style={{ ["--enter-delay" as string]: "120ms" }}
          >
            Hi, I&apos;m{" "}
            <span className="text-shimmer">{PERSON.shortName}</span>
          </h1>
          <div
            className="hero-enter"
            style={{ ["--enter-delay" as string]: "220ms" }}
          >
            <TypewriterRoles />
          </div>
          <p
            className="font-mono text-sm text-white/50 mb-6 hero-enter"
            style={{ ["--enter-delay" as string]: "280ms" }}
          >
            {PERSON.education}
          </p>
          <p
            className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed hero-enter"
            style={{ ["--enter-delay" as string]: "360ms" }}
          >
            Building intelligent systems at the intersection of AI, data, and impact.
          </p>
          <div
            className="flex flex-wrap gap-4 hero-enter"
            style={{ ["--enter-delay" as string]: "440ms" }}
          >
            <a
              href="#projects"
              className="btn-glow px-6 py-3 rounded-lg font-mono text-sm bg-cyan-accent/10 border border-cyan-accent/50 text-cyan-accent hover:bg-cyan-accent/20"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Lakshmi_Naga_Hrishitaa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-6 py-3 rounded-lg font-mono text-sm border border-violet-accent/50 text-violet-accent hover:bg-violet-accent/10"
            >
              Download Resume
            </a>
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
        className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-cyan-accent"
        aria-label="Scroll to about"
      >
        Scroll
      </a>
    </section>
  );
}
