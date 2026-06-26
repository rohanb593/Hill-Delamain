"use client";

import { PlaneTakeoff, Ship, Truck, FileSearch, Warehouse } from "lucide-react";

const services = [
  {
    icon: PlaneTakeoff,
    title: "Air Freight",
    description:
      "Handling air consolidations and charter cargo. We manage the full cycle — origin to final delivery — with precision.",
    accent: "oklch(0.52 0.20 25)",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "FCL and LCL groupage services to and from Zambia. Competitive rates, reliable schedules, and full documentation support on every shipment.",
    accent: "oklch(0.37 0.23 265)",
  },
  {
    icon: Truck,
    title: "Surface Freight",
    description:
      "Local, continental, and inter-continental road transport. Our own fleet of 20 vehicles — including 8 trucks up to 24 tons — covers all Zambian routes and cross-border corridors.",
    accent: "oklch(0.52 0.20 25)",
  },
  {
    icon: FileSearch,
    title: "Customs Broking",
    description:
      "ZRA-compliant customs broking with 53 ASYCUDA profiles and a ZMW 150M transit bond. Expert HS classification, duty rebates, and post-clearance audit support.",
    accent: "oklch(0.52 0.20 25)",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Logistics",
    description:
      "5,956m² of warehouse space across Lusaka, Ndola, Kitwe, and Chingola. Full logistics solutions: procurement, expediting, packing, and last-mile distribution.",
    accent: "oklch(0.37 0.23 265)",
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <article
      className="reveal rounded-xl overflow-hidden cursor-default transition-transform duration-200"
      style={{
        transitionDelay: `${(i % 3) * 80}ms`,
        background: "oklch(1 0 0 / 0.05)",
        backdropFilter: "blur(0px)",
        border: "1px solid oklch(0.90 0.01 262)",
        borderTop: `4px solid ${s.accent}`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div className="p-7">
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5"
          style={{ background: `${s.accent}15`, color: s.accent }}
        >
          <s.icon size={24} strokeWidth={1.5} />
        </div>
        <h3
          className="font-display font-700 text-xl mb-3 leading-tight"
          style={{ color: "oklch(0.13 0.01 262)" }}
        >
          {s.title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: "oklch(0.50 0.008 262)" }}
        >
          {s.description}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="relative min-h-[100dvh] py-20 lg:py-24 overflow-hidden" style={{ background: "oklch(0.97 0.005 258)" }}>

      {/* Background decorations */}
      <img
        src="/hd-plane-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2"
        style={{
          transform: "translate(-50%, -35%)",
          width: "clamp(600px, 80vw, 1100px)",
          opacity: 0.45,
          zIndex: 0,
        }}
      />
      <img
        src="/hd-ship-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute"
        style={{
          bottom: "-6%",
          left: "-4%",
          width: "clamp(220px, 28vw, 420px)",
          opacity: 0.12,
          zIndex: 0,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 reveal">
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "oklch(0.52 0.20 25)" }}
            >
              What We Do
            </span>
            <h2
              className="font-display font-800 leading-tight"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              All Aspects of{" "}
              <span style={{ color: "oklch(0.52 0.20 25)" }}>Freight Forwarding</span>
            </h2>
          </div>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "oklch(0.50 0.008 262)", maxWidth: "42ch" }}
          >
            One company handling every dimension of your supply chain across Zambia
            and beyond. ZRA compliant, and trusted by leading
            mining and industrial companies for over 60 years.
          </p>
        </div>

        {/* Identity bar */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-14 reveal">
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centred */}
        <div className="grid sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={i + 3} s={s} i={i + 3} />
          ))}
        </div>

      </div>
    </section>
  );
}

