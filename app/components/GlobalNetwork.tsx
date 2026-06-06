import Image from "next/image";

const offices = [
  { name: "Lusaka — Inland Depot", type: "Head Office & Depot", color: "oklch(0.44 0.22 25)" },
  { name: "Lusaka — Airport", type: "Air Cargo Terminal", color: "oklch(0.44 0.22 25)" },
  { name: "Ndola — Inland", type: "Branch Office", color: "oklch(0.28 0.13 262)" },
  { name: "Ndola — Airport", type: "Air Cargo Terminal", color: "oklch(0.28 0.13 262)" },
  { name: "Kitwe", type: "Branch Office", color: "oklch(0.28 0.13 262)" },
  { name: "Chingola", type: "Branch Office", color: "oklch(0.28 0.13 262)" },
];

const borders = [
  "Chirundu", "Livingstone", "Kazungula",
  "Nakonde", "Kasumbalesa", "Katima Mulilo",
  "Chanida", "Mwami",
];

const partners = [
  "DHL Global Forwarding",
  "CEVA Logistics",
  "DP World",
  "ECU Line / Allcargo",
];

export default function GlobalNetwork() {
  return (
    <section className="min-h-[100dvh] flex items-center py-20 lg:py-24" style={{ background: "oklch(0.97 0.005 258)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal"
              style={{ color: "oklch(0.44 0.22 25)" }}
            >
              Our Zambian Network
            </span>
            <h2
              className="font-display font-800 leading-tight mb-6 reveal"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              15 Offices.
              <br />
              <span style={{ color: "oklch(0.28 0.13 262)" }}>8 Border Posts.</span>
              <br />
              One Network.
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-8 reveal"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "46ch" }}
            >
              Headquartered at 7216 Kachidza Road, Lusaka, with offices at every
              major inland depot, airport cargo terminal, and border crossing in
              Zambia.
            </p>

            {/* Office list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {offices.map((o, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-2.5 rounded-lg px-4 py-3 border"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                    background: "white",
                    borderColor: "oklch(0.92 0.008 262)",
                  }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ background: o.color }}
                  />
                  <div>
                    <p className="font-semibold text-xs leading-tight" style={{ color: "oklch(0.13 0.01 262)" }}>
                      {o.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.008 262)" }}>{o.type}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Border posts */}
            <div
              className="reveal rounded-lg px-5 py-4 border mb-8"
              style={{ background: "white", borderColor: "oklch(0.92 0.008 262)" }}
            >
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "oklch(0.50 0.008 262)" }}>
                Border Posts
              </p>
              <div className="flex flex-wrap gap-2">
                {borders.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "oklch(0.97 0.005 258)", color: "oklch(0.38 0.01 262)", border: "1px solid oklch(0.90 0.01 262)" }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Global partners */}
            <div className="reveal">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "oklch(0.50 0.008 262)" }}>
                Global Partners
              </p>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "oklch(0.44 0.22 25 / 0.08)", color: "oklch(0.44 0.22 25)", border: "1px solid oklch(0.44 0.22 25 / 0.2)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map side */}
          <div className="reveal-right relative">
            <div
              className="rounded-2xl overflow-hidden shadow-xl border"
              style={{ borderColor: "oklch(0.90 0.01 262)" }}
            >
              <Image
                src="/hd-world.png"
                alt="Hill & Delamain Zambia office network"
                width={700}
                height={420}
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-4 rounded-xl px-6 py-4 shadow-xl"
              style={{ background: "oklch(0.44 0.22 25)" }}
            >
              <p className="font-display font-800 text-2xl leading-none" style={{ color: "white" }}>
                60+
              </p>
              <p className="text-xs font-medium mt-0.5" style={{ color: "oklch(0.90 0.06 25)" }}>
                Years in Zambia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
