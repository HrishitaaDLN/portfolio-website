import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { PERSON, SKILL_GROUPS } from "@/lib/data";
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const ICONS: Record<string, React.ReactNode> = {
  code: <FaCode className="text-cyan-accent" />,
  brain: <FaBrain className="text-cyan-accent" />,
  server: <FaServer className="text-violet-accent" />,
  database: <FaDatabase className="text-cyan-accent" />,
  cloud: <FaCloud className="text-violet-accent" />,
};

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
            I&apos;m Hrishitaa. I build AI systems that people actually use, not demos that die in a
            notebook.
          </p>

          <p>
            I just finished my MS in Computer Science at UIC, and I work across the whole stack —
            React and TypeScript up front, Python and FastAPI behind it, all on AWS. But my favorite
            work lives in the AI layer: multi-agent systems and RAG pipelines built with LangGraph
            and Amazon Bedrock. I&apos;ve built a system that pulls clean, structured data out of
            messy PDFs at 95%+ accuracy, and a clinical tool that doctors at UI Health use every
            day.
          </p>

          <p>
            Here&apos;s what I care about: the last 20%. The failure you catch before it hits
            production. The workflow so smooth the user never thinks about it. Anyone can ship the
            happy path — I sweat the rest.
          </p>

          <p>
            When I&apos;m not building software, I&apos;m painting or restoring old things. Turns
            out it&apos;s the same job: take something rough or broken, and patiently make it work
            again.
          </p>

          <a
            href={`mailto:${PERSON.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-accent hover:text-white transition-colors pt-2"
          >
            📩 {PERSON.email}
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm headshot-frame group">
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-accent/40 to-violet-accent/40 opacity-60 headshot-glow"
              aria-hidden
            />
            <div className="headshot-ring absolute -inset-2 rounded-2xl pointer-events-none" aria-hidden />
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

      <div className="mt-16">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
          Technical <span className="text-violet-accent">Skills</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delayMs={i * 80} className="h-full">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-accent/10 text-2xl">
                    {ICONS[group.icon]}
                  </div>
                  <h4 className="font-display font-semibold text-lg leading-snug">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-chip skill-chip-pop font-mono text-[11px] px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5"
                      style={{ ["--chip-delay" as string]: `${skillIndex * 35}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
