"use client";

import { useEffect, useState } from "react";
import { TYPEWRITER_ROLES } from "@/lib/data";

export default function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const preferReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (preferReduced) {
      setText(TYPEWRITER_ROLES[0]);
      return;
    }

    const full = TYPEWRITER_ROLES[roleIndex];
    const atEnd = text === full;
    const atStart = text.length === 0;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && !atEnd) {
      timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 55);
    } else if (!deleting && atEnd) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && !atStart) {
      timeout = setTimeout(() => setText(full.slice(0, text.length - 1)), 32);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % TYPEWRITER_ROLES.length);
      }, 280);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <p className="font-mono text-lg sm:text-xl md:text-2xl text-white/90 mb-2 type-cursor min-h-[1.75rem] break-words">
      {text || "\u00A0"}
    </p>
  );
}
