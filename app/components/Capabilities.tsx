const pillars = [
  {
    number: "01",
    eyebrow: "Heritage",
    title: "60 Years of Leadership",
    body: "Established in Zambia in 1965, Hill + Delamain is one of the country's most enduring logistics providers. Six decades of proven performance built on accountability, transparency, and consistent delivery.",
    accent: "oklch(0.52 0.20 25)",
  },
  {
    number: "02",
    eyebrow: "People",
    title: "150+ Trained Professionals",
    body: "A team of over 150 experienced staff across 14 Zambian offices, supported by clearly defined SOPs and continuous development aligned with evolving ZRA regulations.",
    accent: "oklch(0.37 0.23 265)",
  },
  {
    number: "03",
    eyebrow: "Global Reach",
    title: "International Partnerships",
    body: "Strategic partnerships with leading global partners give our clients access to world-class networks backed by Zambian expertise.",
    accent: "oklch(0.52 0.20 25)",
  },
];

const certifications = [
  { label: "ZCFAA Member", detail: "" },
  { label: "ZRA ASYCUDA", detail: "53 Profiles" },
  { label: "TAZ Member", detail: "" },
  { label: "Transit Bond", detail: "ZMW 150M" },
  { label: "ZCILT Member", detail: "" },
];

export default function Capabilities() {
  return (
    <section
      className="min-h-[100dvh] py-20 lg:py-24"
      style={{ background: "oklch(0.97 0.005 258)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-18 reveal">
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "oklch(0.52 0.20 25)" }}
            >
              Why Hill + Delamain
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
              Majority Zambian Owned.
              <br />
              <span style={{ color: "oklch(0.52 0.20 25)" }}>Globally Connected.</span>
            </h2>
          </div>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "oklch(0.50 0.008 262)", maxWidth: "42ch" }}
          >
            We are the only freight forwarder in Zambia offering the full
            spectrum — air, sea, road, customs broking, insurance, and
            bonded warehousing — under one roof.
          </p>
        </div>

        {/* ── Dual-color identity bar ── */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-14 reveal">
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
        </div>

        {/* ── Pillars ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="reveal rounded-xl overflow-hidden"
              style={{
                background: "white",
                border: `1px solid oklch(0.90 0.01 262)`,
                borderTop: `4px solid ${p.accent}`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="p-7 lg:p-8">
                <span
                  className="font-display font-800 block mb-5 leading-none"
                  style={{
                    color: p.accent,
                    fontSize: "2.75rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {p.number}
                </span>
                <p
                  className="text-sm font-semibold tracking-[0.15em] uppercase mb-3"
                  style={{ color: p.accent }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="font-display font-700 text-xl lg:text-2xl mb-4 leading-tight"
                  style={{ color: "oklch(0.13 0.01 262)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "oklch(0.50 0.008 262)" }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className="reveal mb-14">
          <p
            className="text-sm font-semibold tracking-[0.15em] uppercase mb-6"
            style={{ color: "oklch(0.50 0.008 262)" }}
          >
            Accreditations &amp; Compliance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="rounded-xl px-5 py-5 flex flex-col items-center justify-center text-center"
                style={{
                  background: "white",
                  border: `2px solid ${i % 2 === 0 ? "oklch(0.52 0.20 25)" : "oklch(0.37 0.23 265)"}`,
                }}
              >
                <p
                  className="text-lg font-semibold leading-tight mb-1"
                  style={{ color: i % 2 === 0 ? "oklch(0.52 0.20 25)" : "oklch(0.37 0.23 265)" }}
                >
                  {c.label}
                </p>
                {c.detail && (
                  <p className="text-base font-bold mt-1" style={{ color: "oklch(0.13 0.01 262)" }}>
                    {c.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Quote ── */}
        <div className="reveal grid lg:grid-cols-2 gap-6">
          <div
            className="rounded-2xl px-8 py-10"
            style={{ background: "oklch(0.52 0.20 25)" }}
          >
            <p
              className="text-lg lg:text-xl font-semibold leading-snug"
              style={{ color: "white", letterSpacing: "-0.01em" }}
            >
              &ldquo;We never make claims we cannot support. We never make promises we cannot keep.&rdquo;
            </p>
          </div>
          <div
            className="rounded-2xl px-8 py-10 flex flex-col justify-center"
            style={{ background: "oklch(0.37 0.23 265)" }}
          >
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "white" }}
            >
              60 years of consistent, accountable service to Zambia&apos;s most
              demanding industries — mining, manufacturing, government, and
              international trade.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
