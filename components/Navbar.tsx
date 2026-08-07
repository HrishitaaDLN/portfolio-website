"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0]?.href ?? "#about");
  const [underline, setUnderline] = useState({ left: 0, width: 0, ready: false });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const update = () => {
      const link = linkRefs.current[active];
      const list = listRef.current;
      if (!link || !list) return;
      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setUnderline({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
        ready: true,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active, scrolled]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#050508]/95 border-b border-cyan-accent/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            <span className="text-cyan-accent">H</span>
            <span className="text-white/90">rishitaa</span>
          </a>

          <ul ref={listRef} className="relative hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    ref={(node) => {
                      linkRefs.current[link.href] = node;
                    }}
                    href={link.href}
                    className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                      isActive ? "text-cyan-accent" : "text-white/60 hover:text-cyan-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <span
              className="nav-underline absolute -bottom-2 h-0.5 rounded-full bg-cyan-accent"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.ready ? 1 : 0,
              }}
              aria-hidden
            />
          </ul>

          <button
            type="button"
            className="md:hidden text-cyan-accent text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#050508]/98 md:hidden pt-24 px-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-2xl transition-colors ${
                    active === link.href ? "text-cyan-accent" : "text-white/80 hover:text-cyan-accent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
