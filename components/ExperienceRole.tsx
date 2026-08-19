"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Sparkline from "@/components/visuals/Sparkline";
import { FaChevronDown } from "react-icons/fa";

const TELEMETRY_ROLES = new Set([
  "AI/ML Engineer",
  "Graduate Research Assistant",
  "Full Stack Developer",
  "Associate Software Engineer",
  "Software Engineering Intern",
]);

export default function ExperienceRole({
  job,
  delayMs = 0,
}: {
  job: ExperienceEntry;
  delayMs?: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `experience-${job.title.replace(/\s+/g, "-").toLowerCase()}-${job.period.replace(/\s+/g, "-")}`;
  const showSpark = TELEMETRY_ROLES.has(job.title);

  return (
    <Reveal as="article" className="relative pl-10" delayMs={delayMs}>
      <div
        className="absolute left-0 top-6 w-4 h-4 rounded-full bg-cyan-accent border-4 border-[#050508] timeline-dot"
        aria-hidden
      />

      <div className="glass-card p-5 sm:p-6 md:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
              <h3 className="font-display text-lg sm:text-xl font-bold">{job.title}</h3>
              {showSpark && <Sparkline active={open} />}
            </div>
            <p className="text-violet-accent font-mono text-sm mt-1">{job.company}</p>
            <p className="font-mono text-xs text-white/45">{job.location}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end sm:gap-4 shrink-0 sm:pt-1">
            <span className="font-mono text-xs text-cyan-accent whitespace-nowrap leading-none">
              {job.period}
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-cyan-accent transition-colors leading-none"
            >
              {open ? "Hide details" : "View details"}
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
          </div>
        </div>

        <div
          id={panelId}
          aria-hidden={!open}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden min-h-0">
            <div
              className={`pt-4 transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {job.group && (
                <p className="text-white/55 text-sm mb-5 leading-relaxed border-l-2 border-violet-accent/40 pl-3">
                  {job.group}
                </p>
              )}

              <ul className="space-y-4">
                {job.bullets.map((bullet) => (
                  <li key={bullet.title}>
                    <p className="font-mono text-xs text-cyan-accent mb-1">{bullet.title}</p>
                    <p className="text-white/65 text-sm leading-relaxed">
                      {bullet.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
