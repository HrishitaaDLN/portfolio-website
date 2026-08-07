import Section from "@/components/ui/Section";
import ResearchGlobe from "@/components/visuals/ResearchGlobe";
import { FaExternalLinkAlt } from "react-icons/fa";

const RESEARCH_ITEMS = [
  {
    title: "Multi-Agent Extraction",
    description:
      "Architected a scalable manager-worker multi-agent system with LangChain and Amazon Bedrock, delivering structured extraction from unstructured PDFs across 100+ municipalities at 95%+ accuracy.",
  },
  {
    title: "Chroma RAG Pipeline",
    description:
      "Engineered a Chroma RAG pipeline with prompt design and context management, lifting retrieval precision by 40% across inconsistent document formats.",
  },
  {
    title: "Telemetry & Reliability",
    description:
      "Instrumented the pipeline with Datadog telemetry and automated failure detection, cutting silent data corruption by 70%.",
  },
  {
    title: "Research Impact",
    description:
      "Presented the work to the Sustainability Research and Innovation Congress, reaching an audience across 80+ countries.",
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
              <span className="font-mono text-xs text-cyan-accent">May 2025 – May 2026</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2 leading-snug">
              Infrastructure and Decision Intelligence for Accelerating Technology &amp; Energy
              Resilience (IDIATER)
            </h3>
            <p className="font-mono text-sm text-white/50 mb-2">
              University of Illinois at Chicago · Graduate Research Assistant
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
