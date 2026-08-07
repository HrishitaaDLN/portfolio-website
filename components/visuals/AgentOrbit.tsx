"use client";

/** Mini multi-agent graph: Manager → Workers → Critic with a traveling token. */
export default function AgentOrbit({ className = "" }: { className?: string }) {
  return (
    <div className={`agent-orbit ${className}`} aria-hidden>
      <svg viewBox="0 0 280 120" className="w-full h-auto max-w-sm">
        <defs>
          <linearGradient id="agentEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00FFE0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <line x1="60" y1="60" x2="140" y2="30" stroke="url(#agentEdge)" strokeWidth="1.5" />
        <line x1="60" y1="60" x2="140" y2="90" stroke="url(#agentEdge)" strokeWidth="1.5" />
        <line x1="140" y1="30" x2="220" y2="60" stroke="url(#agentEdge)" strokeWidth="1.5" />
        <line x1="140" y1="90" x2="220" y2="60" stroke="url(#agentEdge)" strokeWidth="1.5" />

        <circle className="agent-token" r="4" fill="#00FFE0">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M60,60 L140,30 L220,60 L140,90 Z" />
        </circle>

        <g className="agent-node">
          <circle cx="60" cy="60" r="18" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1.5" />
          <text x="60" y="64" textAnchor="middle" fill="#00FFE0" fontSize="8" fontFamily="monospace">
            Mgr
          </text>
        </g>
        <g className="agent-node" style={{ animationDelay: "0.4s" }}>
          <circle cx="140" cy="30" r="16" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1.5" />
          <text x="140" y="34" textAnchor="middle" fill="#c4a6ff" fontSize="7" fontFamily="monospace">
            Work
          </text>
        </g>
        <g className="agent-node" style={{ animationDelay: "0.8s" }}>
          <circle cx="140" cy="90" r="16" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1.5" />
          <text x="140" y="94" textAnchor="middle" fill="#c4a6ff" fontSize="7" fontFamily="monospace">
            Work
          </text>
        </g>
        <g className="agent-node" style={{ animationDelay: "1.2s" }}>
          <circle cx="220" cy="60" r="18" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1.5" />
          <text x="220" y="64" textAnchor="middle" fill="#00FFE0" fontSize="8" fontFamily="monospace">
            Critic
          </text>
        </g>
      </svg>
      <p className="font-mono text-[10px] text-white/40 mt-1 tracking-wide">manager · worker · critic</p>
    </div>
  );
}
