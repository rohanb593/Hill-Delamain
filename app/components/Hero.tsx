"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* Background: blue left, red right */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[58%] h-full" style={{ background: "oklch(0.28 0.13 262)" }} />
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0"
          style={{
            width: "48%",
            background: "oklch(0.44 0.22 25)",
            clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div>
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-3 py-1 rounded-sm"
            style={{
              color: "oklch(0.44 0.22 25)",
              background: "oklch(1 0 0 / 0.1)",
              border: "1px solid oklch(1 0 0 / 0.15)",
            }}
          >
            Established in Zambia 1965
          </span>

          <h1
            className="font-display font-800 leading-[0.92] mb-6"
            style={{
              color: "white",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Your Cargo.
            <br />
            <span style={{ color: "oklch(0.75 0.14 25)" }}>Our Commitment.</span>
          </h1>

          <p
            className="text-base lg:text-lg leading-relaxed mb-10 max-w-[52ch]"
            style={{ color: "oklch(0.80 0.02 262)" }}
          >
            Zambia&apos;s leading clearing and freight forwarding company since 1965.
            Local expertise across 15 offices, backed by global partnerships
            with DHL, CEVA and DP World.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded transition-all duration-200 text-sm"
              style={{ background: "oklch(0.44 0.22 25)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "oklch(0.56 0.20 25)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "oklch(0.44 0.22 25)")
              }
            >
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded transition-all duration-200 text-sm"
              style={{
                color: "white",
                border: "1.5px solid oklch(1 0 0 / 0.35)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.35)";
              }}
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right: Logo image + decorative elements */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Large decorative logo */}
          <div className="relative w-72 h-72">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: "oklch(1 0 0 / 0.06)" }}
            />
            <Image
              src="/hd-hero-logo.png"
              alt="Hill & Delamain"
              width={400}
              height={400}
              className="relative z-10 w-full h-full object-contain p-6"
              priority
            />
          </div>

          {/* Floating stat card */}
          <div
            className="absolute -bottom-4 -left-8 rounded-xl px-6 py-4 shadow-2xl"
            style={{ background: "white" }}
          >
            <p
              className="font-display font-800 text-3xl leading-none"
              style={{ color: "oklch(0.44 0.22 25)" }}
            >
              60+
            </p>
            <p className="text-xs font-medium mt-0.5" style={{ color: "oklch(0.50 0.008 262)" }}>
              Years Experience
            </p>
          </div>

          {/* Floating stat card 2 */}
          <div
            className="absolute -top-4 -right-4 rounded-xl px-6 py-4 shadow-2xl"
            style={{ background: "oklch(0.28 0.13 262)" }}
          >
            <p className="font-display font-800 text-3xl leading-none" style={{ color: "white" }}>
              15
            </p>
            <p className="text-xs font-medium mt-0.5" style={{ color: "oklch(0.75 0.04 262)" }}>
              Zambia Offices
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
