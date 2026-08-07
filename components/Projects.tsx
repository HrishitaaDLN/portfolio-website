import CommuteGenieCard from "@/components/CommuteGenieCard";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/data";
import {
  ChurnIcon,
  ClinicalIcon,
  FairnessIcon,
  FinGptIcon,
  ReferralIcon,
} from "@/components/visuals/ProjectIcons";
import { FaExternalLinkAlt, FaFilePdf, FaGithub } from "react-icons/fa";

const ICON_MAP = {
  fairness: FairnessIcon,
  fingpt: FinGptIcon,
  churn: ChurnIcon,
  clinical: ClinicalIcon,
  referral: ReferralIcon,
};

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title={
        <>
          Featured <span className="text-violet-accent">Work</span>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => {
          if (project.icon === "commute") {
            return (
              <Reveal key={project.name} delayMs={i * 70}>
                <CommuteGenieCard project={project} />
              </Reveal>
            );
          }

          const Icon = ICON_MAP[project.icon as keyof typeof ICON_MAP];

          return (
            <Reveal
              key={project.name}
              delayMs={i * 70}
            >
              <article className="glass-card p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:items-start">
                <div className="flex gap-4 items-start flex-1">
                  {Icon && <Icon />}
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs text-cyan-accent">{project.period}</span>
                    <h3 className="font-display text-xl font-bold mt-1">{project.name}</h3>
                    <p className="text-white/50 text-sm mb-3">{project.subtitle}</p>
                    <p className="text-white/65 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="skill-chip font-mono text-[10px] px-2 py-0.5 rounded border border-violet-accent/30 text-violet-accent/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      {"paper" in project && project.paper && (
                        <a
                          href={project.paper}
                          className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFilePdf /> Paper <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> GitHub <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
