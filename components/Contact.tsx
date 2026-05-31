"use client";

import { useState } from "react";
import { PERSON } from "@/lib/data";
import { FaLinkedin, FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: PERSON.email,
    href: `mailto:${PERSON.email}`,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hrishitaa-dharmavarapu-ln-3420a8205",
    href: PERSON.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/HrishitaaDLN",
    href: PERSON.github,
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-24 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-accent via-white to-violet-accent bg-clip-text text-transparent">
            Let&apos;s Build Something
          </span>
        </h2>
        <p className="text-center text-white/50 font-mono text-sm mb-12">
          Have a project in mind? Let&apos;s connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-cyan-accent/40 transition-colors group"
                >
                  <span className="p-3 rounded-lg bg-cyan-accent/10 shrink-0">
                    <Icon className="text-cyan-accent text-lg" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-white/45 mb-0.5">{link.label}</p>
                    <p className="font-mono text-sm text-white/80 group-hover:text-cyan-accent transition-colors break-all">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
            <div>
              <label className="font-mono text-xs text-white/50 block mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:border-cyan-accent/50 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-white/50 block mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:border-cyan-accent/50 focus:outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-white/50 block mb-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:border-cyan-accent/50 focus:outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-mono text-sm bg-cyan-accent/15 border border-cyan-accent/40 text-white hover:bg-cyan-accent/25 transition-colors"
            >
              {sent ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message <FaPaperPlane className="text-cyan-accent" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
