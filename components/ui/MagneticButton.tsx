"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: string;
  target?: string;
  rel?: string;
};

export default function MagneticButton({
  href,
  children,
  className = "",
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setReduced(reduced || coarse);
  }, []);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.2, y: y * 0.2 });
  };

  const onLeave = () => setOffset({ x: 0, y: 0 });

  const style: CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.18s ease-out",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}
