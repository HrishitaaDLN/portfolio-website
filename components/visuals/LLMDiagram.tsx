const BLOCKS = [
  { label: "Input", sub: "Tokens" },
  { label: "Embedding", sub: "Vector space" },
  { label: "Attention", sub: "Q, K, V" },
  { label: "FFN", sub: "Feed-forward" },
  { label: "Output", sub: "Logits" },
];

const BADGES = ["GPT", "RAG", "LangChain", "Transformers", "Embeddings"];

export default function LLMDiagram() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="font-mono text-xs px-2 py-1 rounded-full border border-cyan-accent/30 bg-cyan-accent/5 text-cyan-accent"
          >
            {badge}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {BLOCKS.map((block) => (
          <div key={block.label} className="glass-card px-4 py-3 text-center">
            <p className="font-display font-semibold text-sm text-white">{block.label}</p>
            <p className="font-mono text-[10px] text-cyan-accent/70">{block.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
