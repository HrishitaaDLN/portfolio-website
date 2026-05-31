import Image from "next/image";
import Section from "@/components/ui/Section";
import { PERSON } from "@/lib/data";

const TECH_TAGS = [
  "LangGraph",
  "LangChain",
  "RAG",
  "FastAPI",
  "React",
  "MLflow",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Python",
];

const SKILL_BARS = [
  { label: "Gen AI", pct: 92 },
  { label: "LLMs & Prompt Engineering", pct: 90 },
  { label: "Agentic AI", pct: 88 },
  { label: "Full-Stack", pct: 85 },
  { label: "MLOps", pct: 85 },
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title={
        <>
          About <span className="text-cyan-accent">Me</span>
        </>
      }
      className="mesh-gradient"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-5 text-white/70 leading-relaxed">
          <p className="text-lg text-white/80 font-medium">
            I build AI systems that work in the real world — not just in notebooks.
          </p>

          <p>
            I&apos;m finishing my MS in Computer Science at UIC, where I research LLM-powered
            pipelines and agentic systems as part of the IDIATER group. My work has been presented
            to the Metropolitan Mayors Caucus and accepted at the Sustainability Research and
            Innovation Congress spanning 80+ countries.
          </p>

          <p>
            Before grad school I spent two years at OpenText as a software engineer, working
            directly with enterprise clients — presenting POCs, gathering feedback, and shipping
            production systems serving 2M+ users. I learned early that the best engineering
            isn&apos;t about elegant code. It&apos;s about finding what&apos;s broken and building
            the fix that actually sticks.
          </p>

          <p className="text-white/80">My technical work sits at the intersection of AI and real-world impact:</p>
          <ul className="space-y-2 pl-4 list-disc marker:text-cyan-accent">
            <li>Multi-agent systems with LangGraph, LangChain, and RAG pipelines</li>
            <li>LLM document parsing and prompt engineering at production accuracy</li>
            <li>Full-stack delivery from FastAPI backends to React frontends</li>
            <li>MLOps with MLflow, Docker, Kubernetes, Terraform, and AWS</li>
          </ul>

          <p>
            I&apos;m genuinely excited about the space where AI meets enterprise — where agents stop
            being demos and start being infrastructure. That&apos;s the problem I want to work on
            next.
          </p>

          <p className="text-white/60 text-sm">
            Open to <span className="text-cyan-accent">Forward Deployed Engineer</span>,{" "}
            <span className="text-cyan-accent">Applied AI Engineer</span>, and{" "}
            <span className="text-cyan-accent">Prompt Engineering</span> roles at companies building
            at the frontier.
          </p>

          <div className="space-y-4 pt-2">
            {SKILL_BARS.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-white/60">{skill.label}</span>
                  <span className="text-cyan-accent">{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-accent to-violet-accent"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-cyan-accent/20 bg-cyan-accent/5 text-cyan-accent/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={`mailto:${PERSON.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors pt-2"
          >
            📩 {PERSON.email}
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-accent/40 to-violet-accent/40 opacity-60"
              aria-hidden
            />
            <div className="relative glass-card overflow-hidden rounded-2xl p-1">
              <Image
                src="/headshot.webp"
                alt={`${PERSON.name} — professional headshot`}
                width={400}
                height={400}
                sizes="(max-width: 1024px) 280px, 384px"
                quality={85}
                loading="lazy"
                className="w-full h-auto rounded-xl object-cover aspect-square"
              />
            </div>
          </div>
          <p className="font-mono text-sm text-white/50 mt-4 text-center lg:text-right">
            {PERSON.role}
          </p>
          <p className="font-mono text-xs text-cyan-accent/70 text-center lg:text-right">
            {PERSON.education}
          </p>
        </div>
      </div>
    </Section>
  );
}
