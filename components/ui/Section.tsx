import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionProps {
  id?: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function Section({
  id,
  label,
  title,
  children,
  className = "",
  titleClassName = "mb-12",
}: SectionProps) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-cyan-accent text-sm mb-2">{label}</p>
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold ${titleClassName}`}>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
