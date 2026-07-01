import Link from "next/link";

export const metadata = {
  title: "Our Heritage | Hill + Delamain",
  description: "Over 60 years of logistics leadership in Zambia. The story of Hill + Delamain since 1965.",
};

const TEXT = "oklch(0.13 0.01 262)";
const MUTED = "oklch(0.50 0.008 262)";
const RED = "oklch(0.52 0.20 25)";
const BLUE = "oklch(0.37 0.23 265)";

const sections = [
  {
    title: "Who We Are",
    body: `Hill and Delamain was established in Zambia in 1965 and is a leading provider of world class clearing and freight forwarding services in Zambia. We are involved in all aspects of air, road, rail and ocean freight forwarding; along with customs clearing of both import and export traffic.

The company is well established with eleven offices throughout Zambia and a strong staff of over 100. The executive management is accomplished, with an overall experience of more than 50 years in the Zambian freight forwarding industry.`,
  },
  {
    title: "Our History",
    body: `Hill & Delamain has been established in Zambia since 1965. Once part of a large and successful multinational logistics company, the Hill & Delamain Group was broken up through acquisitions in the early 90's. The Zambia operation became independent through a Management buyout and has maintained its position as one of the leading service providers in the industry.

The Company is majority Zambian owned and Management is also majority Zambian with senior personnel having in excess of 10 years tenure with the Company.

Since its establishment in 1965, Hill & Delamain has grown to become one of the leading international forwarding groups. Originally part of a major international conglomerate, the group has been privately owned and run by Directors of the company since 1986.`,
  },
  {
    title: "Training & People",
    body: `The Company's success is attributable to the emphasis on training which is evident as H&D has been the training ground for many of the successful managers and operators in the industry. We have continued with this belief which has resulted in a very professional and experienced workforce.

The special and personal involvement of our leadership has helped us to succeed through the care and concern we have for our customers.`,
  },
  {
    title: "Infrastructure",
    body: `The Company has one of the best infrastructures in Zambia with representation at all major Ports of Entry as well as Inland Port operations. Through our Ports of Entry we maintain and manage K35 Million in Bond guarantees. The Company has an excellent relationship with Customs at all levels.`,
  },
  {
    title: "Copperbelt Operations",
    body: `Although the Company has its Head Office in Lusaka, two-thirds of the operation centres are based on the Copperbelt. We maintain the largest client base on the Copperbelt which mainly consists of suppliers and contractors to the Mining industry.

We have maintained our leadership position through the ups and downs of the Mining industry in Zambia. Through this time we have adapted to the changing logistics environment to manage our client's businesses efficiently. This is evident as we have represented many of our clients for at least a decade.`,
  },
  {
    title: "Global Partnerships",
    body: `Due to our historical origins and relationships we represent some of the largest multinational logistics companies in the World. This gives us the reach and muscle to leverage on our network partners to deliver to our client's expectations. We work closely with our Global partners and Regional agents to deliver the best available solutions and leverage on their respective strengths.

We believe that our strategic partnerships bring our clients the best combination of operators to ensure efficient, predictable and sustained delivery of services.

With over 30 offices in 11 countries, we can provide a truly global network to satisfy all your demands.`,
  },
  {
    title: "Our Commitment",
    body: `Quality of service — at a competitive rate — remains our primary goal, the key to our success and the key to our future.

By providing a complete range of services that can be tailored to the individual needs of our clients — whenever and wherever that might be — we adapt our business to suit yours.`,
  },
];

export default function HeritagePage() {
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
            Heritage
          </p>
          <h1
            className="font-display font-800 text-4xl lg:text-5xl mb-4 leading-tight reveal"
            style={{ color: TEXT, letterSpacing: "-0.025em" }}
          >
            Over 60 Years of Leadership
          </h1>
          <p className="text-base reveal" style={{ color: MUTED }}>
            Established in Zambia in 1965 — one of the country&apos;s most enduring logistics providers.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro pull quote */}
        <div
          className="rounded-2xl px-8 py-10 mb-14 reveal"
          style={{ background: RED }}
        >
          <p
            className="text-lg lg:text-xl font-bold leading-snug"
            style={{ color: "white", letterSpacing: "-0.01em" }}
          >
            &ldquo;Hill and Delamain would like to offer our logistical services for the movement of freight to Zambia. We are committed to providing services both locally and internationally.&rdquo;
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
          style={{ background: BLUE }}
        >
          <div>
            <p
              className="font-display font-800 text-xl leading-tight mb-1"
              style={{ color: "white" }}
            >
              Try us. Call us.
            </p>
            <p className="text-sm" style={{ color: "oklch(1 0 0 / 0.75)" }}>
              Find out we care.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold rounded-lg text-sm transition-opacity duration-150 hover:opacity-85 whitespace-nowrap"
            style={{ background: "white", color: BLUE }}
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
