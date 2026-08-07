"use client";

/** SVG robot with CSS float, ring spin, and eye glow. */
export default function HeroRobot() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 robot-float">
      <svg viewBox="0 0 320 360" className="w-full h-auto" aria-hidden>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFE0" />
            <stop offset="100%" stopColor="#7B2FFF" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0d0d14" />
          </linearGradient>
        </defs>

        <circle
          className="robot-ring"
          cx="160"
          cy="180"
          r="140"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1"
          strokeDasharray="8 12"
          opacity="0.35"
        />

        <line x1="80" y1="120" x2="160" y2="100" stroke="#00FFE0" strokeWidth="1" opacity="0.25" />
        <line x1="160" y1="100" x2="240" y2="120" stroke="#00FFE0" strokeWidth="1" opacity="0.25" />
        <line x1="120" y1="200" x2="200" y2="200" stroke="#00FFE0" strokeWidth="1" opacity="0.25" />

        <rect
          x="110"
          y="60"
          width="100"
          height="80"
          rx="12"
          fill="url(#bodyGrad)"
          stroke="#00FFE0"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <circle cx="140" cy="95" r="8" fill="#00FFE0" className="robot-eye" />
        <circle cx="180" cy="95" r="8" fill="#00FFE0" className="robot-eye" />
        <line x1="160" y1="60" x2="160" y2="35" stroke="#7B2FFF" strokeWidth="2" />
        <circle cx="160" cy="30" r="6" fill="#7B2FFF" opacity="0.8" />

        <rect
          x="95"
          y="150"
          width="130"
          height="140"
          rx="8"
          fill="url(#bodyGrad)"
          stroke="#7B2FFF"
          strokeWidth="1"
          opacity="0.9"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line
              x1={110 + i * 22}
              y1="165"
              x2={110 + i * 22}
              y2="275"
              stroke="#00FFE0"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <line
              x1="105"
              y1={175 + i * 20}
              x2="215"
              y2={175 + i * 20}
              stroke="#00FFE0"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </g>
        ))}
        <circle cx="160" cy="210" r="20" fill="none" stroke="#00FFE0" strokeWidth="1" opacity="0.5" />
        <circle cx="160" cy="210" r="8" fill="#7B2FFF" opacity="0.6" />

        <rect x="70" y="160" width="25" height="60" rx="6" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1" />
        <rect x="225" y="160" width="25" height="60" rx="6" fill="#1a1a2e" stroke="#00FFE0" strokeWidth="1" />
        <rect x="115" y="295" width="35" height="50" rx="6" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1" />
        <rect x="170" y="295" width="35" height="50" rx="6" fill="#1a1a2e" stroke="#7B2FFF" strokeWidth="1" />
      </svg>
    </div>
  );
}
