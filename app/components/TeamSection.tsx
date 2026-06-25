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
      className="min-h-[100dvh] py-20 lg:py-24"
      style={{ background: "oklch(0.97 0.005 258)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 reveal">
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "oklch(0.52 0.20 25)" }}
            >
              Our People
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
              More Than{" "}
              <span style={{ color: "oklch(0.52 0.20 25)" }}>150 Expert Staff</span>
            </h2>
          </div>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "oklch(0.50 0.008 262)", maxWidth: "42ch" }}
          >
            Our people are our competitive advantage. Across every Zambian
            office you&apos;ll find experienced freight professionals with clearly
            defined SOPs who take pride in their work and your cargo.
          </p>
        </div>

        {/* Identity bar */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-14 reveal">
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
        </div>

        {/* Two-column: image + content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">

          {/* Image */}
          <div className="reveal order-2 lg:order-1 relative">
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
            <div
              className="absolute -bottom-5 -left-5 w-24 h-24 rounded-xl -z-10"
              style={{ background: "oklch(0.52 0.20 25)" }}
            />
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl -z-10"
              style={{ background: "oklch(0.13 0.01 262)" }}
            />
          </div>

          {/* Values */}
          <div className="order-1 lg:order-2 reveal">
            <p
              className="text-sm font-semibold tracking-[0.15em] uppercase mb-6"
              style={{ color: "oklch(0.50 0.008 262)" }}
            >
              Our Values
            </p>
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div
                  key={v}
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "white",
                    border: `2px solid ${i % 2 === 0 ? "oklch(0.52 0.20 25)" : "oklch(0.37 0.23 265)"}`,
                  }}
                >
                  <p
                    className="text-base font-semibold leading-snug"
                    style={{ color: i % 2 === 0 ? "oklch(0.52 0.20 25)" : "oklch(0.37 0.23 265)" }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quote panels */}
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
              150 trained professionals across 14 offices — each one accountable
              to the same standard of service that has defined Hill + Delamain
              since 1965.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
