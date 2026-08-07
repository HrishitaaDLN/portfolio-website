"use client";

/** Datadog-style telemetry sparkline — spikes when `active`. */
export default function Sparkline({ active = false }: { active?: boolean }) {
  const bars = [28, 42, 35, 58, 48, 72, 40, 65, 52, 80, 55, 68];

  return (
    <div
      className={`sparkline inline-flex items-end gap-[2px] h-5 ${active ? "sparkline-active" : ""}`}
      aria-hidden
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="sparkline-bar w-[3px] rounded-sm bg-cyan-accent/40"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}
