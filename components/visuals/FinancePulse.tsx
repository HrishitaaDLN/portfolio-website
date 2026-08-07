"use client";

/** Financial RAG — sentiment / price tick animation. */
export default function FinancePulse({ className = "" }: { className?: string }) {
  return (
    <div className={`finance-pulse ${className}`} aria-hidden>
      <svg viewBox="0 0 220 64" className="w-full max-w-sm h-16">
        <path
          className="finance-line"
          d="M8 44 L28 36 L48 48 L68 22 L88 30 L108 18 L128 34 L148 14 L168 28 L188 20 L212 26"
          fill="none"
          stroke="#00FFE0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="finance-tick" cx="148" cy="14" r="4" fill="#7B2FFF" />
        <text x="8" y="60" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">
          phrasebank rag
        </text>
        <text x="212" y="60" textAnchor="end" fill="#00FFE0" fontSize="8" fontFamily="monospace">
          +sentiment
        </text>
      </svg>
      <p className="font-mono text-[10px] text-white/40">financial retrieval + live sentiment</p>
    </div>
  );
}
