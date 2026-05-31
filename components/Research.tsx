import Section from "@/components/ui/Section";
import ResearchGlobe from "@/components/visuals/ResearchGlobe";
import { FaExternalLinkAlt } from "react-icons/fa";

const RESEARCH_ITEMS = [
  {
    title: "ML Data Pipeline",
    description:
      "Engineered an end-to-end ingestion pipeline to collect, merge, and structure heterogeneous data — sustainability plans, emissions inventories, and census data — across 100+ municipalities.",
  },
  {
    title: "NLP & LLM Extraction",
    description:
      "Built a prompt-engineered LLM document parsing system converting raw municipal PDFs into structured datasets with 95%+ extraction accuracy using NLP extraction chains.",
  },
  {
    title: "Experiment Tracking & Feature Engineering",
    description:
      "Tracked model runs with MLflow and transformed 100+ municipal financial reports into analysis-ready feature sets; built Streamlit dashboards presented to urban planning groups, the Metropolitan Mayors Caucus, and at the SRI Congress spanning 80+ countries.",
  },
  {
    title: "Research Impact",
    description:
      "Research accepted to the Sustainability Research and Innovation Congress (SRI) spanning 80+ countries; findings adopted by local governments to benchmark climate investments.",
  },
];

export default function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title={
        <>
          Research <span className="text-cyan-accent">Highlight</span>
        </>
      }
    >
      <div className="glass-card p-6 md:p-10 border border-cyan-accent/20">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
              <span className="font-mono text-xs text-violet-accent uppercase tracking-wider">
                IDIATER · UIC
              </span>
              <span className="font-mono text-xs text-cyan-accent">May 2025 – Present</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2 leading-snug">
              Infrastructure and Decision Intelligence for Accelerating Technology &amp; Energy
              Resilience (IDIATER)
            </h3>
            <p className="font-mono text-sm text-white/50 mb-2">
              University of Illinois at Chicago · Research Assistant
            </p>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              IDIATER (Infrastructure and Decision Intelligence for Accelerating Technology &amp;
              Energy Resilience) Research Group
            </p>
            <ul className="space-y-5">
              {RESEARCH_ITEMS.map((item) => (
                <li key={item.title} className="text-sm">
                  <p className="font-mono text-cyan-accent text-xs mb-1">{item.title}</p>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
            <a
              href="https://municipality-dashboard-azapplfzy7ctpxlgzrfhudq.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg font-mono text-sm bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent/20 transition-colors"
            >
              Live Dashboard <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
          <ResearchGlobe />
        </div>
      </div>
    </Section>
  );
}
