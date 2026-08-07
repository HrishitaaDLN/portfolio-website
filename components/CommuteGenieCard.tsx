"use client";

import { useState } from "react";
import CommuteGenieDiagram from "@/components/visuals/CommuteGenieDiagram";
import TransitPulse from "@/components/visuals/TransitPulse";
import AgentOrbit from "@/components/visuals/AgentOrbit";
import { CommuteGenieIcon } from "@/components/visuals/ProjectIcons";
import { FaChevronDown, FaExternalLinkAlt, FaFilePdf, FaGithub } from "react-icons/fa";

type CommuteProject = {
  name: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  github: string;
  paper?: string;
};

export default function CommuteGenieCard({ project }: { project: CommuteProject }) {
  const [open, setOpen] = useState(false);
  const panelId = "commute-genie-details";

  return (
    <article className="glass-card p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:items-start">
        <div className="flex gap-4 items-start flex-1 min-w-0">
          <CommuteGenieIcon />
          <div className="flex-1 min-w-0">
            <span className="font-mono text-xs text-cyan-accent">{project.period}</span>
            <h3 className="font-display text-xl font-bold mt-1">{project.name}</h3>
            <p className="text-white/50 text-sm mb-3">{project.subtitle}</p>
            <p className="text-white/65 text-sm leading-relaxed mb-4">{project.description}</p>

            <div className="mb-4 space-y-3">
              <TransitPulse />
              <div className="md:hidden">
                <AgentOrbit />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="project-tag skill-chip font-mono text-[10px] px-2 py-0.5 rounded border border-violet-accent/30 text-violet-accent/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.paper && (
                <a
                  href={project.paper}
                  className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf /> Paper <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
              <a
                href={project.github}
                className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub <FaExternalLinkAlt className="text-[10px]" />
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-cyan-accent transition-colors"
              >
                {open ? "Hide details" : "View architecture"}
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block shrink-0 w-56 pt-2">
          <AgentOrbit />
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
            className={`pt-6 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <CommuteGenieDiagram />
          </div>
        </div>
      </div>
    </article>
  );
}
