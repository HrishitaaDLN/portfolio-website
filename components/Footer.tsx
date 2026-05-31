import { PERSON } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-white/40">
          © {year} {PERSON.shortName}. Built with Next.js, Tailwind & Framer Motion.
        </p>
        <p className="font-mono text-xs text-cyan-accent/50">
          {PERSON.role} · {PERSON.education}
        </p>
      </div>
    </footer>
  );
}
