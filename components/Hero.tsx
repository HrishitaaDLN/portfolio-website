import HeroRobot from "@/components/visuals/HeroRobot";
import { PERSON } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-cyan-accent/5 via-transparent to-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-cyan-accent text-sm mb-4">Software Engineer - AI Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-violet-accent bg-clip-text text-transparent">
              {PERSON.shortName}
            </span>
          </h1>
          <p className="font-mono text-xl md:text-2xl text-white/90 mb-2">{PERSON.role}</p>
          <p className="font-mono text-sm text-white/50 mb-6">{PERSON.education}</p>
          <p className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed">
            Building intelligent systems at the intersection of AI, data, and impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-mono text-sm bg-cyan-accent/10 border border-cyan-accent/50 text-cyan-accent hover:bg-cyan-accent/20 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Lakshmi_Naga_Hrishitaa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-mono text-sm border border-violet-accent/50 text-violet-accent hover:bg-violet-accent/10 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroRobot />
        </div>
      </div>
    </section>
  );
}
