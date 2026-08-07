"use client";

/** Jagged signal → clean signal — “last 20%” / fix what breaks. */
export default function BrokenFixedMorph({ className = "" }: { className?: string }) {
  return (
    <div className={`broken-fixed ${className}`} aria-hidden>
      <svg viewBox="0 0 200 40" className="w-full max-w-xs h-10">
        <path
          className="broken-path"
          d="M4 28 L24 12 L40 30 L58 8 L76 26 L94 14 L110 32 L128 10 L146 28 L164 16 L196 22"
          fill="none"
          stroke="#7B2FFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="fixed-path"
          d="M4 20 C40 8, 70 32, 100 18 C130 6, 160 28, 196 16"
          fill="none"
          stroke="#00FFE0"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-mono text-[10px] text-white/40">
        <span className="text-violet-accent/80">noise</span>
        {" → "}
        <span className="text-cyan-accent/80">signal</span>
      </p>
    </div>
  );
}
