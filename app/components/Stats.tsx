const stats = [
  { number: "15",   label: "Offices in Zambia",   suffix: "" },
  { number: "150",  label: "Expert Staff",         suffix: "+" },
  { number: "1965", label: "Established",          suffix: "" },
  { number: "5956", label: "m² Warehouse Space",   suffix: "" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6 lg:px-10 py-24"
      style={{ background: "oklch(0.44 0.22 25)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Statement */}
        <p
          className="font-display font-700 text-center mb-16 lg:mb-20 reveal"
          style={{
            color: "oklch(1 0 0 / 0.88)",
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Moving Zambia Forward.
        </p>

        {/* Large numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className="font-display font-800 leading-none mb-4"
                style={{
                  color: "white",
                  fontSize: "clamp(4.5rem, 10vw, 8rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.number}
                <span style={{ color: "oklch(0.80 0.16 25)" }}>{s.suffix}</span>
              </p>
              <div
                className="w-10 h-px mb-4"
                style={{ background: "oklch(1 0 0 / 0.25)" }}
              />
              <p
                className="text-sm font-semibold tracking-wide uppercase"
                style={{
                  color: "oklch(0.92 0.06 25)",
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="font-display font-700 text-center mt-20 reveal"
          style={{
            color: "oklch(1 0 0 / 0.45)",
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Local Expertise. Global Reach. Where Service Counts.
        </p>
      </div>
    </section>
  );
}
