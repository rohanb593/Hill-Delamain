"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SECTIONS = [
  { id: "hero",     label: "Home" },
  { id: "stats",    label: "Overview" },
  { id: "services", label: "Services" },
  { id: "about",    label: "About" },
  { id: "network",  label: "Network" },
  { id: "team",     label: "Team" },
  { id: "contact",  label: "Contact" },
];

export default function PageScrollContainer({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = SECTIONS
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const i = els.indexOf(entry.target as HTMLElement);
            if (i !== -1) setActive(i);
          }
        }
      },
      { root: container, threshold: 0.4 }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        goTo(SECTIONS[Math.min(active + 1, SECTIONS.length - 1)].id);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goTo(SECTIONS[Math.max(active - 1, 0)].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  return (
    <>
      <div
        ref={containerRef}
        className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory"
      >
        {children}
      </div>

      {/* Navigation dots — right side */}
      <nav
        aria-label="Section navigation"
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[300] flex-col gap-3"
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            aria-label={`Go to ${s.label}`}
            className="group flex items-center justify-end gap-2.5 py-0.5 bg-transparent border-0 cursor-pointer"
          >
            <span
              className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100"
              style={{
                color: "white",
                background: "oklch(0.13 0.01 262 / 0.82)",
                transition: "opacity 150ms ease-out",
              }}
            >
              {s.label}
            </span>
            <span
              className="flex-shrink-0 rounded-full block"
              style={{
                width:  active === i ? "10px" : "6px",
                height: active === i ? "10px" : "6px",
                background: active === i
                  ? "oklch(0.44 0.22 25)"
                  : "oklch(0.82 0.01 262 / 0.55)",
                boxShadow: active === i
                  ? "0 0 0 3px oklch(0.44 0.22 25 / 0.28)"
                  : "none",
                transition: "all 280ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
