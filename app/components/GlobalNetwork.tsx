"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { FlyToFn } from "./ZambiaMap";

const ZambiaMap = dynamic(() => import("./ZambiaMap"), { ssr: false });
const WorldNetworkMap = dynamic(() => import("./WorldNetworkMap"), { ssr: false });

const partners = [
  { name: "Global Partner", role: "Air & ocean freight" },
  { name: "Global Partner", role: "Contract logistics" },
  { name: "Global Partner", role: "Port & terminal ops" },
  { name: "Global Partner", role: "LCL consolidation" },
];

const offices = [
  { name: "Lusaka — Inland Depot", type: "Head Office & Depot",   lat: -15.43, lng: 28.28 },
  { name: "Lusaka — Airport",      type: "Air Cargo Terminal",    lat: -15.32, lng: 28.46 },
  { name: "Ndola — Inland",        type: "Branch Office",         lat: -12.97, lng: 28.64 },
  { name: "Ndola — Airport",       type: "Air Cargo Terminal",    lat: -12.95, lng: 28.67 },
  { name: "Kitwe",                 type: "Branch Office",         lat: -12.80, lng: 28.21 },
  { name: "Chingola",              type: "Branch Office",         lat: -12.53, lng: 27.88 },
];

const borders = [
  { name: "Chirundu",     country: "Zimbabwe",            lat: -16.03, lng: 28.90 },
  { name: "Livingstone",  country: "Zimbabwe / Botswana", lat: -17.85, lng: 25.87 },
  { name: "Kazungula",    country: "Botswana / Namibia",  lat: -17.77, lng: 25.26 },
  { name: "Nakonde",      country: "Tanzania",            lat:  -9.37, lng: 32.68 },
  { name: "Kasumbalesa",  country: "DRC",                 lat: -12.22, lng: 27.82 },
  { name: "Katima Mulilo",country: "Namibia",             lat: -17.50, lng: 24.32 },
  { name: "Chanida",      country: "Mozambique",          lat: -14.99, lng: 30.39 },
  { name: "Mwami",        country: "Malawi",              lat: -13.40, lng: 32.90 },
];

export default function GlobalNetwork() {
  const flyToRef = useRef<FlyToFn | null>(null);
  const [tocOpen, setTocOpen] = useState(true);

  function handleLocation(lat: number, lng: number, name: string, detail: string, kind: "office" | "border") {
    flyToRef.current?.(lat, lng, name, detail, kind);
  }

  return (
    <div style={{ background: "oklch(0.97 0.005 258)" }}>

      {/* ── Section 1: Header + Interactive Map ──────────────────── */}
      <section className="pt-20 lg:pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 reveal">
            <div>
              <span
                className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: "oklch(0.52 0.20 25)" }}
              >
                Our Zambian Network
              </span>
              <h2
                className="font-display font-800 leading-tight"
                style={{
                  color: "oklch(0.13 0.01 262)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                15 Offices.{" "}
                <span style={{ color: "oklch(0.37 0.23 265)" }}>8 Border Posts.</span>
                <br />
                One Network.
              </h2>
            </div>
            <p
              className="text-sm lg:text-base leading-relaxed"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "38ch" }}
            >
              Headquartered in Lusaka with offices at every major inland depot,
              airport cargo terminal, and border crossing in Zambia.
            </p>
          </div>

          {/* Map + TOC row */}
          <div className="reveal flex gap-4 items-stretch" style={{ height: "520px" }}>

            {/* Interactive map */}
            <div
              className="flex-1 rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "1px solid oklch(0.90 0.01 262)", minWidth: 0 }}
            >
              <ZambiaMap onReady={(fn) => { flyToRef.current = fn; }} />
            </div>

            {/* Table of contents — full panel toggles open/closed */}
            {tocOpen ? (
              <div
                className="flex flex-col rounded-2xl"
                style={{
                  width: "236px",
                  flexShrink: 0,
                  background: "white",
                  border: "1px solid oklch(0.90 0.01 262)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                {/* TOC header with close button */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ borderBottom: "1px solid oklch(0.92 0.01 262)", flexShrink: 0 }}
                >
                  <span
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: "oklch(0.40 0.01 262)" }}
                  >
                    Locations
                  </span>
                  <button
                    onClick={() => setTocOpen(false)}
                    title="Hide panel"
                    style={{ background: "transparent", cursor: "pointer", lineHeight: 1, padding: "2px" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "oklch(0.52 0.20 25)" }}>
                      <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* TOC body — always visible when panel is open */}
                <div className="flex-1 overflow-y-auto px-2 py-2">

                  <p
                    className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 mb-1.5 mt-0.5"
                    style={{ color: "oklch(0.60 0.005 262)" }}
                  >
                    Offices & Air Terminals
                  </p>
                  {offices.map((o) => (
                    <button
                      key={o.name}
                      className="w-full text-left rounded-lg px-2 py-1.5 mb-0.5"
                      style={{ background: "transparent", cursor: "pointer" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.96 0.005 262)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      onClick={() => handleLocation(o.lat, o.lng, o.name, o.type, "office")}
                    >
                      <span className="flex items-start gap-2">
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-[3px] flex-shrink-0"
                          style={{ background: "#C83C3C" }}
                        />
                        <span>
                          <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>
                            {o.name}
                          </span>
                          <span className="block text-[10px] leading-snug mt-0.5" style={{ color: "oklch(0.55 0.005 262)" }}>
                            {o.type}
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}

                  <p
                    className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 mb-1.5 mt-3"
                    style={{ color: "oklch(0.60 0.005 262)" }}
                  >
                    Border Crossings
                  </p>
                  {borders.map((b) => (
                    <button
                      key={b.name}
                      className="w-full text-left rounded-lg px-2 py-1.5 mb-0.5"
                      style={{ background: "transparent", cursor: "pointer" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.96 0.005 262)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      onClick={() => handleLocation(b.lat, b.lng, b.name, `Border post · ${b.country}`, "border")}
                    >
                      <span className="flex items-start gap-2">
                        <span
                          className="inline-block w-2 h-2 mt-[3px] flex-shrink-0"
                          style={{ background: "#1E3DB4", transform: "rotate(45deg)" }}
                        />
                        <span>
                          <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>
                            {b.name}
                          </span>
                          <span className="block text-[10px] leading-snug mt-0.5" style={{ color: "oklch(0.55 0.005 262)" }}>
                            {b.country}
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}

                </div>
              </div>
            ) : (
              /* Collapsed state — thin tab to reopen */
              <button
                onClick={() => setTocOpen(true)}
                title="Show locations"
                className="flex flex-col items-center justify-center rounded-2xl gap-2"
                style={{
                  width: "36px",
                  flexShrink: 0,
                  background: "white",
                  border: "1px solid oklch(0.90 0.01 262)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "oklch(0.52 0.20 25)" }}>
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "oklch(0.50 0.008 262)",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  Locations
                </span>
              </button>
            )}

          </div>

          {/* Map legend */}
          <div className="flex flex-wrap items-center gap-6 mt-4 mb-0 reveal">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ background: "#C83C3C", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
              />
              <span className="text-xs font-medium" style={{ color: "oklch(0.40 0.01 262)" }}>
                H+D Office / Air Terminal
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rotate-45 flex-shrink-0"
                style={{ background: "#1E3DB4", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
              />
              <span className="text-xs font-medium" style={{ color: "oklch(0.40 0.01 262)" }}>
                Border Post
              </span>
            </div>
            <span className="text-xs" style={{ color: "oklch(0.60 0.005 262)" }}>
              Click any marker or location name for details · Scroll to zoom
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats strip ────────────────────────────────── */}
      <section className="py-14 reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
            style={{ border: "1px solid oklch(0.90 0.01 262)" }}
          >
            {[
              { value: "15", label: "Offices in Zambia", sub: "Lusaka, Copperbelt & borders" },
              { value: "8",  label: "Border Crossings",  sub: "All major Zambian border posts" },
              { value: "60+", label: "Years in Zambia",  sub: "Established 1965" },
              { value: "4",  label: "Global Partners",   sub: "Leading logistics networks" },
            ].map((s, i) => (
              <div
                key={i}
                className="px-6 py-8 flex flex-col"
                style={{
                  background: "white",
                  borderRight: i < 3 ? "1px solid oklch(0.90 0.01 262)" : "none",
                }}
              >
                <span
                  className="font-display font-800 leading-none mb-2"
                  style={{
                    color: i % 2 === 0 ? "oklch(0.52 0.20 25)" : "oklch(0.37 0.23 265)",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.value}
                </span>
                <span className="font-semibold text-sm mb-1" style={{ color: "oklch(0.13 0.01 262)" }}>
                  {s.label}
                </span>
                <span className="text-xs" style={{ color: "oklch(0.58 0.005 262)" }}>
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Global Reach — world map ──────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "oklch(0.97 0.005 258)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-12 reveal">
            <div>
              <span
                className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: "oklch(0.52 0.20 25)" }}
              >
                Global Reach
              </span>
              <h2
                className="font-display font-800 leading-tight"
                style={{
                  color: "oklch(0.13 0.01 262)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                World-Class Partners.
                <br />
                <span style={{ color: "oklch(0.52 0.20 25)" }}>Zambian Expertise.</span>
              </h2>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "44ch" }}
            >
              Strategic alliances with four of the world&apos;s leading logistics
              organisations give our clients access to global networks across
              air, ocean, and land — all managed locally from Zambia.
            </p>
          </div>

          {/* Partners grid above the map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4 reveal">
            {partners.map((p, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{
                  background: "white",
                  border: "1px solid oklch(0.90 0.01 262)",
                }}
              >
                <p className="font-semibold text-sm leading-snug mb-1" style={{ color: "oklch(0.13 0.01 262)" }}>
                  {p.name}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.50 0.008 262)" }}>{p.role}</p>
              </div>
            ))}
          </div>

          {/* Interactive world network map */}
          <div className="reveal" style={{ marginTop: "-11rem" }}>
            <WorldNetworkMap />
          </div>
        </div>

        {/* Bottom attribution bar */}
        <div
          className="relative"
          style={{ background: "oklch(0.93 0.008 258)", borderTop: "1px solid oklch(0.88 0.01 262)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium" style={{ color: "oklch(0.45 0.008 262)" }}>
              IATA Registered · ZRA Compliant · 53 ASYCUDA Profiles · ZMW 150M Transit Bond
            </p>
            <p className="text-xs" style={{ color: "oklch(0.55 0.005 262)" }}>
              Member: ZCFAA · TAZ · ZCILT
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
