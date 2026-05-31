import Section from "@/components/ui/Section";
import { SKILL_GROUPS } from "@/lib/data";
import {
  FaBrain,
  FaChartLine,
  FaServer,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

const ICONS: Record<string, React.ReactNode> = {
  brain: <FaBrain className="text-cyan-accent" />,
  chart: <FaChartLine className="text-cyan-accent" />,
  server: <FaServer className="text-violet-accent" />,
  database: <FaDatabase className="text-cyan-accent" />,
  viz: <FaChartBar className="text-violet-accent" />,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title={
        <>
          Technical <span className="text-violet-accent">Skills</span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="glass-card p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-cyan-accent/10 text-2xl">{ICONS[group.icon]}</div>
              <h3 className="font-display font-semibold text-lg">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
