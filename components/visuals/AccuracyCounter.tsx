"use client";

import { useEffect, useRef, useState } from "react";

type AccuracyCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  showPlus?: boolean;
};

export default function AccuracyCounter({
  value,
  suffix = "%",
  label,
  className = "",
  showPlus = true,
}: AccuracyCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;
    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div ref={ref} className={`accuracy-counter ${className}`}>
      <p className="font-mono text-2xl md:text-3xl font-medium text-cyan-accent tabular-nums">
        {display}
        {suffix}
        {showPlus && <span className="text-cyan-accent/60 text-lg">+</span>}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-white/45 mt-1">{label}</p>
    </div>
  );
}
