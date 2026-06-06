import Image from "next/image";

const values = [
  "Caring",
  "Attentive to Detail",
  "Highly Motivated",
  "Technically Competent",
  "ZRA Compliant",
  "Individual Service",
];

export default function TeamSection() {
  return (
    <section
      className="min-h-[100dvh] flex items-center py-20 lg:py-24"
      style={{ background: "oklch(0.97 0.005 258)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left order-2 lg:order-1 relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid oklch(0.91 0.008 262)" }}
            >
              <Image
                src="/hd-team.png"
                alt="Hill + Delamain team"
                width={700}
                height={420}
                className="w-full h-auto"
              />
            </div>
            {/* Red accent block */}
            <div
              className="absolute -bottom-5 -left-5 w-24 h-24 rounded-xl -z-10"
              style={{ background: "oklch(0.52 0.20 25)" }}
            />
            {/* Navy accent block */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl -z-10"
              style={{ background: "oklch(0.15 0.05 262)" }}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-5 reveal"
              style={{ color: "oklch(0.52 0.20 25)" }}
            >
              Our People
            </span>
            <h2
              className="font-display font-800 leading-tight mb-4 reveal"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              More Than
              <br />
              <span style={{ color: "oklch(0.52 0.20 25)" }}>150 Expert Staff</span>
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-10 reveal"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "46ch" }}
            >
              Our people are our competitive advantage. Across every Zambian
              office you&apos;ll find experienced freight professionals with clearly
              defined SOPs who take pride in their work and your cargo.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-2 mb-10 reveal">
              {values.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "oklch(0.97 0.005 258)",
                    color: "oklch(0.37 0.23 265)",
                    border: "1px solid oklch(0.90 0.01 262)",
                  }}
                >
                  <span
                    className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.52 0.20 25)" }}
                  />
                  {v}
                </span>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="pl-5 reveal"
              style={{ borderLeft: "3px solid oklch(0.52 0.20 25)" }}
            >
              <p
                className="text-base leading-relaxed italic"
                style={{ color: "oklch(0.42 0.01 262)" }}
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
