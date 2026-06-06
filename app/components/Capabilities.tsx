const pillars = [
  {
    eyebrow: "Heritage",
    title: "60 Years of Leadership",
    body: "Established in Zambia in 1965, H&D is one of the country's most enduring logistics providers. Six decades of proven performance, built on accountability, transparency, and consistent delivery.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.6" opacity="0.4"/>
        <path d="M20 8v12l8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    eyebrow: "People",
    title: "150+ Trained Professionals",
    body: "A team of over 150 experienced staff across 15 Zambian offices, supported by clearly defined SOPs and continuous development aligned with evolving ZRA regulations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    eyebrow: "Global Reach",
    title: "International Partnerships",
    body: "Strategic partnerships with DHL Global Forwarding, CEVA Logistics, DP World, and ECU Line give our clients access to world-class global networks backed by Zambian expertise.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <ellipse cx="20" cy="20" rx="17" ry="17" stroke="currentColor" strokeWidth="1.6" opacity="0.4"/>
        <ellipse cx="20" cy="20" rx="8"  ry="17" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 20h34M20 3a26 10 0 010 34M20 3a26 10 0 000 34" stroke="currentColor" strokeWidth="1.3" opacity="0.6"/>
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="about"
      className="min-h-[100dvh] flex items-center py-20 lg:py-24"
      style={{ background: "oklch(0.28 0.13 262)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "oklch(0.75 0.14 25)" }}
          >
            Why Hill &amp; Delamain
          </span>
          <h2
            className="font-display font-800 leading-tight"
            style={{
              color: "white",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Majority Zambian Owned.
            <br />
            <span style={{ color: "oklch(0.75 0.14 25)" }}>Globally Connected.</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                style={{ background: "oklch(1 0 0 / 0.08)", color: "white" }}
              >
                {p.icon}
              </div>
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                style={{ color: "oklch(0.75 0.14 25)" }}
              >
                {p.eyebrow}
              </p>
              <h3
                className="font-display font-700 text-2xl mb-4 leading-tight"
                style={{ color: "white" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.78 0.03 262)", maxWidth: "38ch" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider + bottom quote */}
        <div
          className="mt-20 pt-12 border-t reveal"
          style={{ borderColor: "oklch(1 0 0 / 0.12)" }}
        >
          <blockquote
            className="font-display font-700 text-center"
            style={{
              color: "oklch(0.85 0.04 262)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;We never make claims we cannot support. We never make promises we cannot keep.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
