import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { CERTIFICATIONS } from "@/lib/data";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { SiAnthropic } from "react-icons/si";

const CERT_ICONS: Record<string, React.ReactNode> = {
  anthropic: <SiAnthropic className="text-2xl text-[#d4a574]" />,
};

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Certifications"
      className="mesh-gradient"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.name} delayMs={i * 80} className="h-full">
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cert-card p-6 text-center h-full flex flex-col group relative overflow-hidden"
            >
              <span className="cert-stamp" aria-hidden>
                ✓
              </span>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white/5 cert-icon">
                  {CERT_ICONS[cert.icon] ?? (
                    <FaCertificate className="text-2xl text-cyan-accent" />
                  )}
                </div>
              </div>
              <h3 className="font-display font-semibold text-sm mb-1 leading-snug group-hover:text-cyan-accent transition-colors">
                {cert.name}
              </h3>
              <p className="font-mono text-xs text-white/50">{cert.issuer}</p>
              <p className="font-mono text-[10px] text-cyan-accent/80 mt-2">
                Completed {cert.date}
              </p>
              <span className="inline-flex items-center justify-center gap-1 font-mono text-[10px] text-violet-accent/90 mt-auto pt-4 group-hover:text-cyan-accent transition-colors">
                Verify certificate <FaExternalLinkAlt className="text-[8px]" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
