"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 15,   suffix: "",    label: "Offices in Zambia",  note: "Across Lusaka, Copperbelt & borders" },
  { end: 150,  suffix: "+",   label: "Expert Staff",        note: "Experienced freight professionals" },
  { end: 1965, suffix: "",    label: "Established",         note: "Over 60 years of proven performance" },
  { end: 5956, suffix: "m²",  label: "Bonded Warehouse",    note: "Across Lusaka, Ndola, Kitwe & Chingola" },
];

function useCountUp(end: number, duration = 1800, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const startVal = 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Expo-out easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(startVal + eased * (end - startVal)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, end, duration]);

  return value;
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const val = useCountUp(stat.end, 1600 + index * 200, active);

  return (
    <div
      className="reveal flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="flex items-baseline gap-1 mb-3">
        <span
          className="font-display font-800 leading-none tabular-nums"
          style={{
            color: "white",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          {stat.label === "Established" ? val.toString() : val.toLocaleString()}
        </span>
        {stat.suffix && (
          <span
            className="font-display font-700"
            style={{
              color: "oklch(0.86 0.12 25)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        className="font-semibold text-sm uppercase tracking-[0.12em] mb-2"
        style={{ color: "oklch(0.92 0.06 25)" }}
      >
        {stat.label}
      </p>

      {/* Note */}
      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.75 0.12 25 / 0.7)" }}>
        {stat.note}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.52 0.20 25)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="mb-16 lg:mb-20 reveal">
          <p
            className="font-display font-800 leading-tight"
            style={{
              color: "white",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Moving Zambia Forward.
          </p>
          <p
            className="mt-2 text-sm font-medium"
            style={{ color: "oklch(0.92 0.06 25)" }}
          >
            Local expertise. Global reach. Where service counts.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} active={active} />
          ))}
        </div>

        {/* Bottom partners strip */}
        <div
          className="mt-20 pt-10 reveal"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.15)" }}
        >
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
            style={{ color: "oklch(0.90 0.06 25 / 0.7)" }}
          >
            Global Partners
          </p>
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            {["Air & Ocean Freight", "Contract Logistics", "Port & Terminal Ops", "LCL Consolidation"].map((p, i) => (
              <span
                key={i}
                className="text-sm font-semibold"
                style={{ color: "oklch(1 0 0 / 0.55)" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
