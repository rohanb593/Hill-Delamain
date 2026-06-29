"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface Feature {
  title: string;
  body: string;
}

interface ServicePageLayoutProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  features: Feature[];
  accent: string;
  ctaLabel: string;
  badge?: string;
}

export default function ServicePageLayout({
  eyebrow,
  title,
  description,
  features,
  accent,
  ctaLabel,
  badge,
}: ServicePageLayoutProps) {
  return (
    <main
      className="min-h-[100dvh] py-20 lg:py-24"
      style={{ background: "oklch(0.97 0.005 258)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Back button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-10 transition-opacity duration-150 hover:opacity-60"
          style={{ color: "oklch(0.50 0.008 262)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Services
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
            <h1
              className="font-display font-800 leading-tight"
              style={{
                color: "oklch(0.13 0.01 262)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              {title}
            </h1>
          </div>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "oklch(0.50 0.008 262)", maxWidth: "42ch" }}
          >
            {description}
          </p>
        </div>

        {/* Identity bar */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-14">
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-7"
              style={{
                background: "white",
                border: "1px solid oklch(0.90 0.01 262)",
              }}
            >
              <h2
                className="font-display font-700 text-lg mb-2 leading-tight"
                style={{ color: "oklch(0.13 0.01 262)" }}
              >
                {item.title}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.50 0.008 262)" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {badge && (
          <div
            className="mb-5 w-full rounded-xl overflow-hidden"
            style={{ background: "white", border: "1px solid oklch(0.90 0.01 262)" }}
          >
            {/* Brand bar at top */}
            <div className="flex h-1">
              <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
              <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-5 gap-px"
              style={{ background: "oklch(0.90 0.01 262)" }}
            >
              {badge.split(" · ").map((item, i, arr) => (
                <div
                  key={item}
                  className={`flex items-center justify-center text-center px-4 py-6 ${i === arr.length - 1 && arr.length % 2 !== 0 ? "col-span-2 sm:col-span-1" : ""}`}
                  style={{ background: "white" }}
                >
                  <span
                    className="text-base font-semibold leading-snug"
                    style={{ color: "oklch(0.20 0.01 262)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA strip */}
        <div
          className="rounded-xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: "white", border: "1px solid oklch(0.90 0.01 262)" }}
        >
          <div>
            <p
              className="font-display font-800 text-xl leading-tight mb-1"
              style={{ color: "oklch(0.13 0.01 262)" }}
            >
              Ready to get started?
            </p>
            <p className="text-sm" style={{ color: "oklch(0.50 0.008 262)" }}>
              Our team in Lusaka will put together a solution that fits your business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-white rounded-lg text-sm transition-opacity duration-150 hover:opacity-85"
              style={{ background: accent }}
            >
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-lg text-sm transition-opacity duration-150 hover:opacity-70"
              style={{ color: "oklch(0.50 0.008 262)", border: "1px solid oklch(0.88 0.01 262)" }}
            >
              All Services
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
