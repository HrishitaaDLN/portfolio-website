"use client";

/** Fairness audit scales — subgroup balance pulse. */
export default function FairnessBalance({ className = "" }: { className?: string }) {
  return (
    <div className={`fairness-balance ${className}`} aria-hidden>
      <svg viewBox="0 0 200 70" className="w-full max-w-xs h-16">
        <line x1="100" y1="12" x2="100" y2="42" stroke="#7B2FFF" strokeWidth="2" />
        <g className="fairness-beam">
          <line x1="40" y1="28" x2="160" y2="28" stroke="#00FFE0" strokeWidth="2" />
          <circle cx="48" cy="42" r="12" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1.5" />
          <circle cx="152" cy="42" r="12" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1.5" />
          <text x="48" y="46" textAnchor="middle" fill="#00FFE0" fontSize="8" fontFamily="monospace">
            A
          </text>
          <text x="152" y="46" textAnchor="middle" fill="#c4a6ff" fontSize="8" fontFamily="monospace">
            B
          </text>
        </g>
        <circle cx="100" cy="10" r="4" fill="#7B2FFF" />
      </svg>
      <p className="font-mono text-[10px] text-white/40">subgroup fairness audit</p>
    </div>
  );
}
