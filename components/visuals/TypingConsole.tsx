"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "> extracting municipal PDFs…",
  "> manager → worker agents online",
  "> retrieval precision +40%",
  "> accuracy: 95%+ across 100+ cities",
];

export default function TypingConsole({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      setText(LINES[LINES.length - 1]);
      setLineIndex(LINES.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const full = LINES[lineIndex];
    if (text.length < full.length) {
      const t = window.setTimeout(() => setText(full.slice(0, text.length + 1)), 28);
      return () => clearTimeout(t);
    }
    if (lineIndex < LINES.length - 1) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setText("");
      }, 900);
      return () => clearTimeout(t);
    }
  }, [visible, text, lineIndex]);

  return (
    <div
      ref={ref}
      className={`typing-console rounded-lg border border-cyan-accent/20 bg-black/40 p-3 font-mono text-[11px] text-cyan-accent/90 ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-1.5 mb-2 opacity-50">
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="ml-2 text-[9px] text-white/40">idiater · bedrock session</span>
      </div>
      <p className="type-cursor min-h-[1.25rem]">{text || "\u00A0"}</p>
    </div>
  );
}
