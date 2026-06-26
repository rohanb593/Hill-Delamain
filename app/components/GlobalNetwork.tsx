"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { FlyToFn } from "./ZambiaMap";

const ZambiaMap = dynamic(() => import("./ZambiaMap"), { ssr: false });
const WorldNetworkMap = dynamic(() => import("./WorldNetworkMap"), { ssr: false });

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
  const invalidateSizeRef = useRef<(() => void) | null>(null);
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      invalidateSizeRef.current?.();
    }, 320);
    return () => clearTimeout(timer);
  }, [tocOpen]);

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
                className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-5"
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
                14 Offices.{" "}
                <span style={{ color: "oklch(0.37 0.23 265)" }}>8 Border Posts.</span>
                <br />
                One Network.
              </h2>
            </div>
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "oklch(0.50 0.008 262)", maxWidth: "42ch" }}
            >
              Headquartered in Lusaka with offices at every major inland depot,
              airport cargo terminal, and border crossing in Zambia.
            </p>
          </div>

          {/* Identity bar */}
          <div className="flex h-1.5 rounded-full overflow-hidden mb-8 reveal">
            <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
            <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
          </div>

          {/* Map + TOC row */}
          <div className="reveal flex flex-col lg:flex-row gap-4 lg:items-stretch lg:h-[520px]">

            {/* Interactive map */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "1px solid oklch(0.90 0.01 262)", minWidth: 0, flex: "1 1 0", minHeight: "340px" }}
            >
              <ZambiaMap
                onReady={(fn) => { flyToRef.current = fn; }}
                onMapReady={(fn) => { invalidateSizeRef.current = fn; }}
              />
            </div>

            {/* Table of contents — animates between open (236px) and collapsed (36px) — desktop only */}
            <div
              className="hidden lg:block"
              style={{
                width: tocOpen ? "236px" : "36px",
                flexShrink: 0,
                background: "white",
                border: "1px solid oklch(0.90 0.01 262)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                borderRadius: "1rem",
                overflow: "hidden",
                position: "relative",
                transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Full panel — fades in when open */}
              <div
                style={{
                  width: "236px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  opacity: tocOpen ? 1 : 0,
                  transition: tocOpen
                    ? "opacity 0.18s ease 0.12s"
                    : "opacity 0.1s ease",
                  pointerEvents: tocOpen ? "auto" : "none",
                }}
              >
                {/* Header */}
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

                {/* Scrollable body */}
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
                        <span className="inline-block w-2 h-2 rounded-full mt-[3px] flex-shrink-0" style={{ background: "#C83C3C" }} />
                        <span>
                          <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>{o.name}</span>
                          <span className="block text-[10px] leading-snug mt-0.5" style={{ color: "oklch(0.55 0.005 262)" }}>{o.type}</span>
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
                        <span className="inline-block w-2 h-2 mt-[3px] flex-shrink-0" style={{ background: "#1E3DB4", transform: "rotate(45deg)" }} />
                        <span>
                          <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>{b.name}</span>
                          <span className="block text-[10px] leading-snug mt-0.5" style={{ color: "oklch(0.55 0.005 262)" }}>{b.country}</span>
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Collapsed tab — fades in when closed */}
              <button
                onClick={() => setTocOpen(true)}
                title="Show locations"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "transparent",
                  cursor: "pointer",
                  opacity: tocOpen ? 0 : 1,
                  transition: tocOpen
                    ? "opacity 0.08s ease"
                    : "opacity 0.18s ease 0.14s",
                  pointerEvents: tocOpen ? "none" : "auto",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "oklch(0.52 0.20 25)" }}>
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "oklch(0.50 0.008 262)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}>
                  Locations
                </span>
              </button>
            </div>

          </div>

          {/* Mobile TOC — accordion below map, hidden on desktop */}
          <div
            className="lg:hidden rounded-2xl overflow-hidden"
            style={{ background: "white", border: "1px solid oklch(0.90 0.01 262)" }}
          >
            <button
              className="flex items-center justify-between w-full px-4 py-3"
              style={{ borderBottom: tocOpen ? "1px solid oklch(0.92 0.01 262)" : "none", background: "transparent", cursor: "pointer" }}
              onClick={() => setTocOpen(v => !v)}
            >
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "oklch(0.40 0.01 262)" }}>
                Locations
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ color: "oklch(0.52 0.20 25)", transition: "transform 0.2s ease", transform: tocOpen ? "rotate(0deg)" : "rotate(-90deg)" }}>
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {tocOpen && (
              <div className="px-2 py-2 grid grid-cols-2 gap-x-2" style={{ maxHeight: "280px", overflowY: "auto" }}>
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 mb-1.5 mt-0.5" style={{ color: "oklch(0.60 0.005 262)" }}>
                    Offices
                  </p>
                  {offices.map((o) => (
                    <button key={o.name} className="w-full text-left rounded-lg px-2 py-1.5 mb-0.5"
                      style={{ background: "transparent", cursor: "pointer" }}
                      onClick={() => handleLocation(o.lat, o.lng, o.name, o.type, "office")}>
                      <span className="flex items-start gap-1.5">
                        <span className="inline-block w-2 h-2 rounded-full mt-[3px] flex-shrink-0" style={{ background: "#C83C3C" }} />
                        <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>{o.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 mb-1.5 mt-0.5" style={{ color: "oklch(0.60 0.005 262)" }}>
                    Border Crossings
                  </p>
                  {borders.map((b) => (
                    <button key={b.name} className="w-full text-left rounded-lg px-2 py-1.5 mb-0.5"
                      style={{ background: "transparent", cursor: "pointer" }}
                      onClick={() => handleLocation(b.lat, b.lng, b.name, `Border post · ${b.country}`, "border")}>
                      <span className="flex items-start gap-1.5">
                        <span className="inline-block w-2 h-2 mt-[3px] flex-shrink-0" style={{ background: "#1E3DB4", transform: "rotate(45deg)" }} />
                        <span className="block text-xs font-medium leading-snug" style={{ color: "oklch(0.18 0.01 262)" }}>{b.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Map legend */}
          <div className="flex flex-wrap items-center gap-6 mt-4 mb-0 reveal">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ background: "#C83C3C", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
              />
              <span className="text-sm font-medium" style={{ color: "oklch(0.40 0.01 262)" }}>
                H+D Office / Air Terminal
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rotate-45 flex-shrink-0"
                style={{ background: "#1E3DB4", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
              />
              <span className="text-sm font-medium" style={{ color: "oklch(0.40 0.01 262)" }}>
                Border Post
              </span>
            </div>
            <span className="text-sm" style={{ color: "oklch(0.60 0.005 262)" }}>
              Click any marker or location name for details · Scroll to zoom
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats strip ────────────────────────────────── */}
      <section className="py-6 reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{ border: "1px solid oklch(0.90 0.01 262)" }}
          >
            {[
              { value: "14", label: "Offices in Zambia", sub: "Lusaka, Copperbelt & borders" },
              { value: "8",  label: "Border Crossings",  sub: "All major Zambian border posts" },
              { value: "60+", label: "Years in Zambia",  sub: "Established 1965" },
              { value: "6",  label: "Global Partners",   sub: "Leading logistics networks" },
            ].map((s, i) => (
              <div
                key={i}
                className="px-6 py-8 flex flex-col"
                style={{
                  background: "white",
                  borderRight: i % 2 === 0 ? "1px solid oklch(0.90 0.01 262)" : "none",
                  borderBottom: i < 2 ? "1px solid oklch(0.90 0.01 262)" : "none",
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
                <span className="font-semibold text-base mb-1" style={{ color: "oklch(0.13 0.01 262)" }}>
                  {s.label}
                </span>
                <span className="text-sm" style={{ color: "oklch(0.58 0.005 262)" }}>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-0">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-12 reveal">
            <div>
              <span
                className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-4"
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
              Strategic alliances with six of the world&apos;s leading logistics
              organisations give our clients access to global networks across
              air, ocean, and land — all managed locally from Zambia.
            </p>
          </div>

          {/* Interactive world network map */}
          <div className="reveal lg:-mt-44">
            <WorldNetworkMap />
          </div>
        </div>

      </section>

    </div>
  );
}
