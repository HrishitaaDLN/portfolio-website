"use client";

import { useEffect, useRef, useState } from "react";
import ExperienceRole from "@/components/ExperienceRole";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (rect.height + start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="experience" className="relative py-20 md:py-24 mesh-gradient">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-cyan-accent text-sm mb-2 text-center">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Career <span className="text-cyan-accent">Timeline</span>
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10"
            aria-hidden
          />
          <div
            className="absolute left-[7px] top-2 w-0.5 origin-top bg-gradient-to-b from-cyan-accent via-violet-accent/70 to-cyan-accent/20"
            style={{ height: `calc((100% - 1rem) * ${progress})` }}
            aria-hidden
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <ExperienceRole key={job.title + job.period} job={job} delayMs={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
