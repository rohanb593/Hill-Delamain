"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 1965, suffix: "",    label: "Established",         note: "Over 60 years of proven performance" },
  { end: 14,   suffix: "",    label: "Offices in Zambia",  note: "Across Lusaka, Copperbelt & borders" },
  { end: 150,  suffix: "+",   label: "Expert Staff",        note: "Experienced freight professionals" },
  { end: 20,   suffix: "",    label: "Delivery Vehicles",   note: "Domestic distribution fleet" },
  { end: 5956, suffix: "m²",  label: "Warehouse",           note: "Across Lusaka, Ndola, Kitwe & Chingola" },
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

function StatCard({ stat, index, active, className = "" }: { stat: typeof stats[0]; index: number; active: boolean; className?: string }) {
  const val = useCountUp(stat.end, 1600 + index * 200, active);

  return (
    <div
      className={`reveal flex flex-col ${className}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <span
          className="font-display font-800 leading-none tabular-nums"
          style={{
            color: "white",
            fontSize: "clamp(3.5rem, 5.5vw, 5.5rem)",
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
              fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        className="font-semibold text-base uppercase tracking-[0.12em] mb-2"
        style={{ color: "oklch(0.92 0.06 25)" }}
      >
        {stat.label}
      </p>

      {/* Note */}
      <p className="text-base leading-relaxed" style={{ color: "white" }}>
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
      className="relative pt-10 pb-24 lg:pt-14 lg:pb-32 overflow-hidden"
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

      {/* Zambian eagle watermark */}
      <img
        src="/fish-eagle-outline.svg"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none select-none"
        style={{
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: 0.15,
          filter: "brightness(0) invert(1)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="mb-16 lg:mb-20 reveal text-center">
          <p
            className="font-display font-800 leading-tight"
            style={{
              color: "white",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Moving Zambia Forward.
          </p>
          <p
            className="mt-3 text-lg font-medium"
            style={{ color: "oklch(0.92 0.06 25)" }}
          >
            Local expertise. Global reach. Where service counts.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 lg:items-start lg:justify-items-center">
          {stats.map((s, i) => {
            const lastOdd = stats.length % 2 !== 0 && i === stats.length - 1;
            return (
              <StatCard
                key={i}
                stat={s}
                index={i}
                active={active}
                className={`items-center text-center${lastOdd ? " col-span-2 lg:col-span-1" : ""}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
