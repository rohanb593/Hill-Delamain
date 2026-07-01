import Link from "next/link";

export const metadata = {
  title: "Global Reach | Hill + Delamain",
  description: "International partnerships and global network. Hill + Delamain connecting Zambia to the world.",
};

const TEXT = "oklch(0.13 0.01 262)";
const MUTED = "oklch(0.50 0.008 262)";
const RED = "oklch(0.52 0.20 25)";
const BLUE = "oklch(0.37 0.23 265)";

const sections = [
  {
    title: "International Network",
    body: `H&D has one of the most comprehensive networks of international offices in the freight forwarding industry; currently augmented by selected agency associates in major cities overseas.

The policy of establishing overseas agencies ensures a greater control of shipments and provides closer liaison with both the shipper and the consignee.`,
  },
  {
    title: "Worldwide Forwarding Service",
    body: `H&D provides a complete worldwide forwarding service by air, sea and land. It controls all aspects of cargo handling: documentation; insurance; export packing through the actual movement of freight to the arrival point at the destination; customs clearance and delivery to the door.`,
  },
  {
    title: "Expert Guidance",
    body: `H&D is expertly qualified to advise shippers on the most appropriate and cost-effective method of transport to suit individual requirements.`,
  },
];

export default function GlobalReachPage() {
  return (
    <main style={{ background: "white" }}>

      {/* Header */}
      <div className="py-20 px-6" style={{ background: "oklch(0.94 0.005 262)" }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-opacity duration-150 hover:opacity-60"
            style={{ color: MUTED }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 reveal"
            style={{ color: RED }}
          >
            Global Reach
          </p>
          <h1
            className="font-display font-800 text-4xl lg:text-5xl mb-4 leading-tight reveal"
            style={{ color: TEXT, letterSpacing: "-0.025em" }}
          >
            International Partnerships
          </h1>
          <p className="text-base reveal" style={{ color: MUTED }}>
            One of the most comprehensive international networks in the freight forwarding industry.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro pull quote */}
        <div
          className="rounded-2xl px-8 py-10 mb-14 reveal"
          style={{ background: BLUE }}
        >
          <p
            className="text-lg lg:text-xl font-bold leading-snug"
            style={{ color: "white", letterSpacing: "-0.01em" }}
          >
            &ldquo;A complete worldwide forwarding service by air, sea and land — from documentation to delivery at the door.&rdquo;
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((s, i) => (
            <section key={s.title} className="reveal">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 rounded-full self-stretch"
                  style={{ background: i % 2 === 0 ? RED : BLUE, minHeight: "1.5rem" }}
                />
                <h2
                  className="font-display font-700 text-xl lg:text-2xl leading-tight"
                  style={{ color: TEXT }}
                >
                  {s.title}
                </h2>
              </div>
              <div className="space-y-4 pl-4">
                {s.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal"
          style={{ background: RED }}
        >
          <div>
            <p
              className="font-display font-800 text-xl leading-tight mb-1"
              style={{ color: "white" }}
            >
              Ready to ship worldwide?
            </p>
            <p className="text-sm" style={{ color: "oklch(1 0 0 / 0.75)" }}>
              Our team will find the most cost-effective solution for your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold rounded-lg text-sm transition-opacity duration-150 hover:opacity-85 whitespace-nowrap"
            style={{ background: "white", color: RED }}
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </main>
  );
}
