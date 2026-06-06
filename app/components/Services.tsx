"use client";

import { PlaneTakeoff, Ship, Truck, ShieldCheck, FileSearch, Warehouse } from "lucide-react";

const services = [
  {
    icon: PlaneTakeoff,
    title: "Air Freight",
    description:
      "IATA-registered agents handling air consolidations and charter cargo. We manage the full cycle — origin to final delivery — with precision.",
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
    icon: ShieldCheck,
    title: "Cargo Insurance",
    description:
      "Comprehensive cargo insurance arranged through African Grey Insurance, covering your goods at every stage of transit. We safeguard your goods and your peace of mind.",
    accent: "oklch(0.37 0.23 265)",
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
      "5,956m² of bonded warehouse space across Lusaka, Ndola, Kitwe, and Chingola. Full logistics solutions: procurement, expediting, packing, and last-mile distribution.",
    accent: "oklch(0.37 0.23 265)",
  },
];

export default function Services() {
  return (
    <section className="min-h-[100dvh] flex items-center py-20 lg:py-24" style={{ background: "oklch(0.97 0.005 258)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "oklch(0.52 0.20 25)" }}
          >
            What We Do
          </span>
          <h2
            className="font-display font-800 leading-tight mb-4"
            style={{
              color: "oklch(0.13 0.01 262)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            All Aspects of Freight Forwarding
          </h2>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "oklch(0.50 0.008 262)" }}>
            One company handling every dimension of your supply chain across Zambia
            and beyond. IATA registered, ZRA compliant, and trusted by leading
            mining and industrial companies for over 60 years.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="reveal group relative rounded-xl p-7 border transition-all duration-300 cursor-default"
              style={{
                transitionDelay: `${(i % 3) * 80}ms`,
                borderColor: "oklch(0.92 0.008 262)",
                borderWidth: "2px",
                background: "white",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = s.accent;
                el.style.boxShadow = `0 8px 32px ${s.accent}22`;
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "oklch(0.92 0.008 262)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5 transition-colors duration-300"
                style={{ background: `${s.accent}15`, color: s.accent }}
              >
                <s.icon size={26} strokeWidth={1.5} />
              </div>

              <h3
                className="font-display font-700 text-xl mb-3 leading-tight"
                style={{ color: "oklch(0.13 0.01 262)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.50 0.008 262)", maxWidth: "38ch" }}
              >
                {s.description}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
