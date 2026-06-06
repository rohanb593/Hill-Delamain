"use client";

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M2 20L16 8l14 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8v16M10 24h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 13l6-3-1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="27" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Air Freight",
    description:
      "IATA-registered agents handling air consolidations and charter cargo. We manage the full cycle — origin to final delivery — with precision.",
    accent: "oklch(0.44 0.22 25)",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M2 20h28M4 20l2-8h16l4 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12V8a1 1 0 011-1h18a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="8"  cy="23" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="24" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M10 26a2 2 0 0014 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sea Freight",
    description:
      "FCL and LCL groupage services to and from Zambia. Competitive rates, reliable schedules, and full documentation support on every shipment.",
    accent: "oklch(0.28 0.13 262)",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="2" y="13" width="20" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M22 17h5l3 4v2h-8v-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="7"  cy="25" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="19" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="27" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: "Surface Freight",
    description:
      "Local, continental, and inter-continental road transport. Our own fleet of 20 vehicles — including 8 trucks up to 24 tons — covers all Zambian routes and cross-border corridors.",
    accent: "oklch(0.44 0.22 25)",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M16 3L4 8v8c0 7 5.5 11.5 12 13 6.5-1.5 12-6 12-13V8L16 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Cargo Insurance",
    description:
      "Comprehensive cargo insurance arranged through African Grey Insurance, covering your goods at every stage of transit. We safeguard your goods and your peace of mind.",
    accent: "oklch(0.28 0.13 262)",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M8 3h12l6 6v20H6V3h2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M20 3v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M10 14h12M10 18h12M10 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customs Broking",
    description:
      "ZRA-compliant customs broking with 53 ASYCUDA profiles and a ZMW 150M transit bond. Expert HS classification, duty rebates, and post-clearance audit support.",
    accent: "oklch(0.44 0.22 25)",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M4 26V16l8-8h8l8 8v10H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="12" y="18" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M16 18v8M12 22h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4 16h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Warehousing & Logistics",
    description:
      "5,956m² of bonded warehouse space across Lusaka, Ndola, Kitwe, and Chingola. Full logistics solutions: procurement, expediting, packing, and last-mile distribution.",
    accent: "oklch(0.28 0.13 262)",
  },
];

export default function Services() {
  return (
    <section className="min-h-[100dvh] flex items-center py-20 lg:py-24" style={{ background: "oklch(1.000 0.000 0)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "oklch(0.44 0.22 25)" }}
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
                {s.icon}
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

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-7 right-7 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: s.accent }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
