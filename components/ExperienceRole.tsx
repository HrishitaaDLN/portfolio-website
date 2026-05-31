"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/lib/data";
import { FaChevronDown } from "react-icons/fa";

export default function ExperienceRole({ job }: { job: ExperienceEntry }) {
  const [open, setOpen] = useState(false);
  const panelId = `experience-${job.title.replace(/\s+/g, "-").toLowerCase()}-${job.period.replace(/\s+/g, "-")}`;

  return (
    <article className="relative pl-10">
      <div
        className="absolute left-0 top-6 w-4 h-4 rounded-full bg-cyan-accent border-4 border-[#050508]"
        aria-hidden
      />

      <div className="glass-card p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-xl font-bold">{job.title}</h3>
              <span className="font-mono text-xs text-cyan-accent shrink-0">
                {job.period}
              </span>
            </div>
            <p className="text-violet-accent font-mono text-sm">{job.company}</p>
            <p className="font-mono text-xs text-white/45">{job.location}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-cyan-accent transition-colors shrink-0"
          >
            {open ? "Hide details" : "View details"}
            <FaChevronDown
              className={`text-[10px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
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
    </article>
  );
}
