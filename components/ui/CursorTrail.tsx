"use client";

import { useEffect, useState } from "react";

/** Subtle cyan cursor trail — desktop only. */
export default function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const [dots, setDots] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;
    setEnabled(true);

    let id = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 32) return;
      last = now;
      const nextId = id++;
      setDots((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: nextId }]);
      window.setTimeout(() => {
        setDots((prev) => prev.filter((d) => d.id !== nextId));
      }, 450);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden>
      {dots.map((dot, i) => (
        <span
          key={dot.id}
          className="cursor-trail-dot absolute rounded-full bg-cyan-accent"
          style={{
            left: dot.x,
            top: dot.y,
            width: 6 - i * 0.3,
            height: 6 - i * 0.3,
            opacity: 0.35 - i * 0.025,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
