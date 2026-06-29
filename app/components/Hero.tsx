"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ paddingTop: "64px" }}
    >
      {/* Deep navy blue — matching the logo artwork */}
      <div className="absolute inset-0" style={{ background: "oklch(0.25 0.22 265)" }} />

      {/* Red diagonal panel — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "oklch(0.52 0.20 25)",
          clipPath: "polygon(62% 0%, 100% 0%, 100% 100%, 55% 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0 0 0 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0 0 0 / 0.3) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Soft glow top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, oklch(0.38 0.22 265 / 0.5), transparent 70%)",
        }}
      />

      {/* HD logo — absolutely centered in the red panel (right ~40% of viewport) */}
      <div className="hero-image hidden lg:flex items-center justify-center absolute right-0 top-0 bottom-0 w-[40%] z-10" style={{ paddingTop: "64px" }}>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-25 scale-110"
            style={{ background: "oklch(0.52 0.20 25)" }}
          />
          <Image
            src="/hd-hero-logo.png"
            alt="Hill + Delamain"
            width={420}
            height={420}
            className="relative z-10 w-72 h-72 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        {/* Left: Text — constrained to ~55% on desktop so it doesn't overlap the image */}
        <div className="w-full lg:max-w-[55%]">
          {/* Eyebrow */}
          <div className="hero-item hero-item-1">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase mb-7 px-3 py-1.5 rounded-sm"
              style={{
                color: "white",
                background: "oklch(1 0 0 / 0.09)",
                border: "1px solid oklch(1 0 0 / 0.15)",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.82 0.12 25)" }}
              />
              Established in Zambia · 1965
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-item hero-item-2 font-display font-800 leading-[0.92] mb-7"
            style={{
              color: "white",
              fontSize: "clamp(3.2rem, 7.5vw, 6rem)",
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            Your Cargo.
            <br />
            <span style={{ color: "oklch(0.82 0.12 25)" }}>Our Commitment.</span>
          </h1>

          {/* Divider */}
          <div
            className="hero-item hero-item-3 w-16 h-px mb-7"
            style={{ background: "oklch(0.52 0.20 25)" }}
          />

          {/* Body */}
          <p
            className="hero-item hero-item-4 text-base lg:text-lg leading-relaxed mb-10"
            style={{ color: "oklch(0.78 0.02 262)", maxWidth: "50ch" }}
          >
            Zambia&apos;s leading clearing and freight forwarding company.
            Local expertise across 14 offices — backed by partnerships with
            leading global partners.
          </p>

          {/* CTAs */}
          <div className="hero-item hero-item-5 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold text-white rounded transition-all duration-200 text-base"
              style={{ background: "oklch(0.52 0.20 25)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "oklch(0.63 0.18 25)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.20 25)")
              }
            >
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold rounded transition-all duration-200 text-base"
              style={{
                color: "white",
                border: "1.5px solid oklch(1 0 0 / 0.28)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.28)";
              }}
            >
              Our Services
            </Link>
          </div>

        </div>

      </div>

      {/* Bottom edge fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.20 0.18 265 / 0.5))",
        }}
      />
    </section>
  );
}
