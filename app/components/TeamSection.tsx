"use client";

const values = [
  { name: "Caring", detail: "Every shipment and every client treated with genuine attention." },
  { name: "Attentive to Detail", detail: "Clearly defined Standard Operating Procedures across all 14 offices." },
  { name: "Highly Motivated", detail: "Six decades of earned, proven performance." },
  { name: "Technically Competent", detail: "Full clearance capability across all commodity types." },
  { name: "ZRA Compliant", detail: "Certified at every Zambian border post." },
  { name: "Individual Service", detail: "One point of contact who knows your cargo." },
];


const pillars = [
  { value: "150+", label: "Expert Staff" },
  { value: "14",   label: "Zambia Offices" },
  { value: "60+",  label: "Years Operating" },
];

export default function TeamSection() {
  return (
    <>
      {/* ── Page hero — dark navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "oklch(0.25 0.22 265)",
          paddingTop: "clamp(5rem, 8vw, 6rem)",
          paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Red top edge */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "3px", background: "oklch(0.52 0.20 25)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">

          {/* Two-column: headline left, quote right */}
          <div className="reveal grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-12 lg:mb-14">
            <div>
              <h1
                className="font-display font-800 leading-[1.0]"
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                }}
              >
                Most of all,{" "}
                <span style={{ color: "oklch(0.82 0.12 25)" }}>we have<br />the people.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-5">
              <p
                className="leading-relaxed"
                style={{ color: "white", fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
              >
                Experienced, knowledgeable and, above all, caring. Across every
                Zambian office you will find freight professionals with clearly
                defined Standard Operating Procedures who take pride in their work and your cargo.
              </p>
            </div>
          </div>

          {/* Stat pillars */}
          <div
            className="reveal flex flex-wrap gap-x-10 gap-y-6 pt-8"
            style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}
          >
            {pillars.map((p, i) => (
              <div key={p.label} className="flex items-baseline gap-2.5">
                <span
                  className="font-display font-800 leading-none"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
                    letterSpacing: "-0.03em",
                    color: "white",
                  }}
                >
                  {p.value}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.13em]"
                  style={{ color: "white" }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Philosophy + Values — light ── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.97 0.005 258)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          {/* Mission Statement */}
          <div
            className="reveal mb-14 pb-14"
            style={{ borderBottom: "1px solid oklch(0.87 0.008 262)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em] mb-6"
              style={{ color: "oklch(0.52 0.20 25)" }}
            >
              Our Mission
            </p>
            <p
              className="font-display font-800 leading-tight"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(1.35rem, 2.6vw, 2.1rem)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
                maxWidth: "70ch",
              }}
            >
              To be the leading provider in Zambia of world class clearing and
              freight forwarding services through the deployment of a reliable
              and efficient management information system, modern handling
              techniques and technically competent well motivated staff.
            </p>
          </div>

          {/* Philosophy pull-quote */}
          <div
            className="reveal mb-14 pb-14"
            style={{ borderBottom: "1px solid oklch(0.87 0.008 262)" }}
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
              <p
                className="font-display font-800 leading-tight"
                style={{
                  color: "oklch(0.52 0.20 25)",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Philosophy
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "oklch(0.30 0.01 262)", maxWidth: "60ch" }}
              >
                H&D believes the traditional qualities of personal service, care and attention
                to detail continue to be of vital importance. We fully recognise that the
                customer is the reason for our work, not just the cause of it.
              </p>
            </div>
          </div>

          {/* Values list heading */}
          <div className="reveal mb-10">
            <div className="flex items-baseline justify-between gap-8 mb-8">
              <h2
                className="font-display font-800 leading-tight"
                style={{
                  color: "oklch(0.13 0.01 262)",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                What We Stand For
              </h2>
            </div>
            <div className="flex overflow-hidden" style={{ height: "1px" }}>
              <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
              <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
            </div>
          </div>

          {/* Values manifest */}
          <div className="reveal">
            <div>
              {values.map((v) => (
                <div
                  key={v.name}
                  className="group flex items-baseline justify-between gap-8 py-5 lg:py-6 cursor-default"
                  style={{ borderTop: "1px solid oklch(0.87 0.008 262)" }}
                >
                  <span
                    className="font-display font-800 transition-colors duration-200 text-hd-ink group-hover:text-hd-red"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                      letterSpacing: "-0.02em",
                      flexShrink: 0,
                    }}
                  >
                    {v.name}
                  </span>
                  <span
                    className="text-base leading-relaxed text-right hidden sm:block"
                    style={{ color: "oklch(0.13 0.01 262)", maxWidth: "28ch", flexShrink: 0 }}
                  >
                    {v.detail}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid oklch(0.87 0.008 262)" }} />
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
