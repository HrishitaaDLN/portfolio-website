"use client";

/** Survival curve — retention over time. */
export default function SurvivalCurve({ className = "" }: { className?: string }) {
  return (
    <div className={`survival-curve ${className}`} aria-hidden>
      <svg viewBox="0 0 220 64" className="w-full max-w-sm h-16">
        <line x1="20" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="20" y1="12" x2="20" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path
          className="survival-path"
          d="M20 16 C60 16, 90 18, 120 28 C150 38, 170 42, 200 46"
          fill="none"
          stroke="#00FFE0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 16 C60 16, 90 18, 120 28 C150 38, 170 42, 200 46 L200 50 L20 50 Z"
          fill="rgba(0,255,224,0.08)"
        />
        <text x="20" y="62" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">
          t₀
        </text>
        <text x="200" y="62" textAnchor="end" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">
          t
        </text>
      </svg>
      <p className="font-mono text-[10px] text-white/40">survival / retention curve</p>
    </div>
  );
}
