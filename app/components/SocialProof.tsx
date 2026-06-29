"use client";

const industries = [
  "Mining & Resources",
  "Manufacturing",
  "International Trade",
  "Construction",
  "Agriculture",
  "Government & NGOs",
];

export default function SocialProof() {
  return (
    <section className="py-10 border-b" style={{ background: "oklch(0.97 0.005 258)", borderColor: "oklch(0.91 0.01 262)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5">
          {industries.map((name) => (
            <span
              key={name}
              className="px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{
                background: "white",
                border: "1.5px solid oklch(0.88 0.01 262)",
                color: "oklch(0.30 0.01 262)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
