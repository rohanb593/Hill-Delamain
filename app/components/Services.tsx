"use client";

import Link from "next/link";
import { PlaneTakeoff, Ship, Truck, FileSearch, Warehouse, Package } from "lucide-react";

const services = [
  {
    icon: PlaneTakeoff,
    title: "Air Freight",
    description:
      "Handling air consolidations and charter cargo. We manage the full cycle — origin to final delivery — with precision.",
    accent: "oklch(0.52 0.20 25)",
    href: "/services/air-freight",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "FCL and LCL groupage services to and from Zambia. Competitive rates, reliable schedules, and full documentation support on every shipment.",
    accent: "oklch(0.37 0.23 265)",
    href: "/services/sea-freight",
  },
  {
    icon: Truck,
    title: "Surface Freight",
    description:
      "Local, continental, and inter-continental road transport. Our own fleet of 20 vehicles — including 8 trucks up to 24 tons — covers all Zambian routes and cross-border corridors.",
    accent: "oklch(0.52 0.20 25)",
    href: "/services/surface-freight",
  },
  {
    icon: FileSearch,
    title: "Customs Broking",
    description:
      "ZRA-compliant customs broking with over 50 ASYCUDA profiles and managing ZMW 250M bond. Expert HS classification, duty rebates, and post-clearance audit support.",
    accent: "oklch(0.37 0.23 265)",
    href: "/services/customs-broking",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Logistics",
    description:
      "5,956m² of warehouse space across Lusaka, Ndola, Kitwe, and Chingola. Full logistics solutions: procurement, expediting, packing, and last-mile distribution.",
    accent: "oklch(0.52 0.20 25)",
    href: "/services/warehousing",
  },
  {
    icon: Package,
    title: "Domestic Distribution",
    description:
      "Nationwide delivery across Zambia using our own fleet of 20 vehicles. From Lusaka to the Copperbelt and beyond — including service delivery to the DRC Copperbelt. Reliable, tracked, and on time.",
    accent: "oklch(0.37 0.23 265)",
    href: "/services/domestic-distribution",
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <Link
      href={s.href}
      className="reveal rounded-xl overflow-hidden transition-transform duration-200 block"
      style={{
        transitionDelay: `${(i % 3) * 80}ms`,
        background: "oklch(1 0 0 / 0.05)",
        backdropFilter: "blur(0px)",
        border: "1px solid oklch(0.90 0.01 262)",
        borderTop: `4px solid ${s.accent}`,
        textDecoration: "none",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div className="p-7 flex flex-col h-full">
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
          className="text-base leading-relaxed flex-1"
          style={{ color: "oklch(0.50 0.008 262)" }}
        >
          {s.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5" style={{ color: s.accent }}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
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
          opacity: 0.7,
          zIndex: 0,
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

        {/* Row 2 — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={i + 3} s={s} i={i + 3} />
          ))}
        </div>

      </div>
    </section>
  );
}

