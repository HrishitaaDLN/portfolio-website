const DOTS = [
  { x: 45, y: 55 }, { x: 52, y: 48 }, { x: 38, y: 62 }, { x: 55, y: 58 },
  { x: 48, y: 42 }, { x: 60, y: 52 }, { x: 42, y: 50 }, { x: 58, y: 45 },
  { x: 35, y: 55 }, { x: 62, y: 60 }, { x: 50, y: 65 }, { x: 44, y: 38 },
];

export default function ResearchGlobe() {
  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,255,224,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="url(#globeGrad)" stroke="rgba(0,255,224,0.2)" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(0,255,224,0.1)" strokeWidth="0.3" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(0,255,224,0.1)" strokeWidth="0.3" />
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1.5" fill="#00FFE0" opacity="0.7" />
        ))}
      </svg>
      <p className="font-mono text-[10px] text-center text-cyan-accent/50 mt-2">
        100+ municipalities
      </p>
    </div>
  );
}
