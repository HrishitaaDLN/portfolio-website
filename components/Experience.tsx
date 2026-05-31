import ExperienceRole from "@/components/ExperienceRole";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-24 mesh-gradient">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-cyan-accent text-sm mb-2">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
          Career <span className="text-cyan-accent">Timeline</span>
        </h2>

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-accent/60 via-violet-accent/30 to-transparent"
            aria-hidden
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <ExperienceRole key={job.title + job.period} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
