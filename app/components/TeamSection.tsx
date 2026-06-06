import Image from "next/image";

const leadership = [
  { name: "Hiten J. Bhagat", role: "Chief Executive Officer", since: "2000" },
  { name: "Ken L. Phiri",    role: "Chief Financial Officer",  since: "1996" },
  { name: "Terence Kamwi",   role: "Customs Clearing Manager", since: "" },
  { name: "James Banda",     role: "Operations Manager",       since: "" },
];

const values = [
  { label: "Caring",               icon: "♦" },
  { label: "Attentive to Detail",  icon: "♦" },
  { label: "Highly Motivated",     icon: "♦" },
  { label: "Technically Competent",icon: "♦" },
  { label: "ZRA Compliant",        icon: "♦" },
  { label: "Individual Service",   icon: "♦" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="min-h-[100dvh] flex items-center py-20 lg:py-24"
      style={{ background: "oklch(1.000 0.000 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <div className="reveal-left order-2 lg:order-1 relative">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "1px solid oklch(0.92 0.008 262)" }}
            >
              <Image
                src="/hd-team.png"
                alt="Hill & Delamain team — more than 100 expert staff"
                width={680}
                height={380}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative red corner block */}
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg -z-10"
              style={{ background: "oklch(0.44 0.22 25)" }}
            />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal"
              style={{ color: "oklch(0.44 0.22 25)" }}
            >
              Our People
            </span>
            <h2
              className="font-display font-800 leading-tight mb-4 reveal"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              More Than
              <br />
              <span style={{ color: "oklch(0.44 0.22 25)" }}>150 Expert Staff</span>
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-8 reveal"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "48ch" }}
            >
              Our people are our competitive advantage. Across every Zambian office,
              you&apos;ll find experienced freight professionals with clearly defined SOPs
              who take pride in their work and your cargo.
            </p>

            {/* Leadership */}
            <div className="grid grid-cols-2 gap-3 mb-8 reveal">
              {leadership.map((l, i) => (
                <div
                  key={i}
                  className="rounded-lg px-4 py-3 border"
                  style={{ background: "oklch(0.97 0.005 258)", borderColor: "oklch(0.92 0.008 262)" }}
                >
                  <p className="font-semibold text-sm leading-tight" style={{ color: "oklch(0.13 0.01 262)" }}>
                    {l.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "oklch(0.44 0.22 25)" }}>{l.role}</p>
                  {l.since && (
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.60 0.005 262)" }}>Since {l.since}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Value tags */}
            <div className="flex flex-wrap gap-3 reveal">
              {values.map((v, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "oklch(0.97 0.005 258)",
                    color: "oklch(0.28 0.13 262)",
                    border: "1px solid oklch(0.90 0.01 262)",
                  }}
                >
                  <span style={{ color: "oklch(0.44 0.22 25)", fontSize: "8px" }}>
                    {v.icon}
                  </span>
                  {v.label}
                </span>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 pl-5 reveal"
              style={{ borderLeft: "3px solid oklch(0.44 0.22 25)" }}
            >
              <p
                className="text-base leading-relaxed italic"
                style={{ color: "oklch(0.38 0.01 262)" }}
              >
                &ldquo;We never make claims we cannot support. We never make promises we cannot keep.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
