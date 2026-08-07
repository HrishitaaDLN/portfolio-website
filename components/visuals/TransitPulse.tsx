"use client";

/** Multi-agent commute: origin → agents → destination. */
export default function TransitPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`transit-pulse ${className}`} aria-hidden>
      <svg viewBox="0 0 260 56" className="w-full max-w-sm h-14">
        <path
          d="M20 28 C70 8, 110 48, 140 28 C170 8, 200 40, 240 28"
          fill="none"
          stroke="rgba(123,47,255,0.35)"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <circle className="transit-dot" r="5" fill="#00FFE0">
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            path="M20 28 C70 8, 110 48, 140 28 C170 8, 200 40, 240 28"
          />
        </circle>
        <circle cx="20" cy="28" r="7" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1.5" />
        <circle cx="140" cy="28" r="6" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1.5" />
        <circle cx="240" cy="28" r="7" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1.5" />
        <text x="20" y="48" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
          start
        </text>
        <text x="140" y="48" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
          agents
        </text>
        <text x="240" y="48" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
          arrive
        </text>
      </svg>
      <p className="font-mono text-[10px] text-white/40">live multi-agent routing</p>
    </div>
  );
}
