"use client";

/** Docs → embeddings → ranked hits — RAG retrieval pulse. */
export default function RagPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`rag-pulse ${className}`} aria-hidden>
      <div className="flex items-center gap-2 md:gap-3 font-mono text-[10px]">
        <div className="rag-stage">
          <span className="rag-shard" />
          <span className="rag-shard" style={{ animationDelay: "0.15s" }} />
          <span className="rag-shard" style={{ animationDelay: "0.3s" }} />
          <span className="text-white/45 mt-1 block">docs</span>
        </div>
        <span className="rag-arrow text-cyan-accent/70">→</span>
        <div className="rag-stage">
          <span className="rag-vector" />
          <span className="text-violet-accent/80 mt-1 block">vector</span>
        </div>
        <span className="rag-arrow text-cyan-accent/70">→</span>
        <div className="rag-stage items-stretch">
          <span className="rag-hit" style={{ width: "92%" }} />
          <span className="rag-hit" style={{ width: "78%", animationDelay: "0.2s" }} />
          <span className="rag-hit" style={{ width: "64%", animationDelay: "0.4s" }} />
          <span className="text-white/45 mt-1 block text-center">ranked</span>
        </div>
      </div>
    </div>
  );
}
