"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ANTARCTICA_ID = 10;

type RegionKey = "NORTAM" | "LATAM" | "EMEA" | "AP";

const regionData: Record<RegionKey, {
  label: string;
  offices: number;
  color: string;
  active: string;
  coords: [number, number]; // [lng, lat]
}> = {
  NORTAM: { label: "NORTAM", offices: 112, color: "#6C5CE7", active: "#8B7FFF", coords: [-100, 47] },
  LATAM:  { label: "LATAM",  offices: 110, color: "#0097B2", active: "#00C4D9", coords: [-53, -12] },
  EMEA:   { label: "EMEA",   offices: 108, color: "#C83C3C", active: "#E05555", coords: [22,  12] },
  AP:     { label: "AP",     offices: 118, color: "#2D8A5E", active: "#3DB87E", coords: [92,  43] },
};

const countryRegion: Record<number, RegionKey> = {
  // ── NORTAM ───────────────────────────────────────────────
  840: "NORTAM", 124: "NORTAM", 484: "NORTAM",
  320: "NORTAM",  84: "NORTAM", 222: "NORTAM", 340: "NORTAM",
  558: "NORTAM", 188: "NORTAM", 591: "NORTAM", 192: "NORTAM",
  388: "NORTAM", 332: "NORTAM", 214: "NORTAM", 780: "NORTAM",
   52: "NORTAM", 662: "NORTAM", 670: "NORTAM", 308: "NORTAM",
   28: "NORTAM", 659: "NORTAM", 212: "NORTAM",  44: "NORTAM",
  // ── LATAM ────────────────────────────────────────────────
  170: "LATAM", 862: "LATAM", 328: "LATAM", 740: "LATAM",
   76: "LATAM", 218: "LATAM", 604: "LATAM",  68: "LATAM",
  600: "LATAM", 152: "LATAM",  32: "LATAM", 858: "LATAM",
  // ── EMEA — Europe ────────────────────────────────────────
    8: "EMEA",  40: "EMEA", 112: "EMEA",  56: "EMEA",
   70: "EMEA", 100: "EMEA", 191: "EMEA", 196: "EMEA",
  203: "EMEA", 208: "EMEA", 233: "EMEA", 246: "EMEA",
  250: "EMEA", 276: "EMEA", 300: "EMEA", 348: "EMEA",
  352: "EMEA", 372: "EMEA", 380: "EMEA", 428: "EMEA",
  440: "EMEA", 442: "EMEA", 470: "EMEA", 498: "EMEA",
  499: "EMEA", 528: "EMEA", 807: "EMEA", 578: "EMEA",
  616: "EMEA", 620: "EMEA", 642: "EMEA", 688: "EMEA",
  703: "EMEA", 705: "EMEA", 724: "EMEA", 752: "EMEA",
  756: "EMEA", 804: "EMEA", 826: "EMEA",  20: "EMEA",
  492: "EMEA", 674: "EMEA", 336: "EMEA",
  // ── EMEA — Middle East ───────────────────────────────────
  784: "EMEA",  48: "EMEA", 368: "EMEA", 376: "EMEA",
  400: "EMEA", 414: "EMEA", 422: "EMEA", 512: "EMEA",
  634: "EMEA", 682: "EMEA", 760: "EMEA", 792: "EMEA",
  887: "EMEA", 364: "EMEA",  51: "EMEA",  31: "EMEA",
  268: "EMEA", 275: "EMEA",
  // ── EMEA — Africa ────────────────────────────────────────
   12: "EMEA",  24: "EMEA", 204: "EMEA",  72: "EMEA",
  854: "EMEA", 108: "EMEA", 120: "EMEA", 132: "EMEA",
  140: "EMEA", 148: "EMEA", 174: "EMEA", 180: "EMEA",
  178: "EMEA", 384: "EMEA", 262: "EMEA", 818: "EMEA",
  226: "EMEA", 232: "EMEA", 231: "EMEA", 266: "EMEA",
  270: "EMEA", 288: "EMEA", 324: "EMEA", 624: "EMEA",
  404: "EMEA", 426: "EMEA", 430: "EMEA", 434: "EMEA",
  450: "EMEA", 454: "EMEA", 466: "EMEA", 478: "EMEA",
  480: "EMEA", 504: "EMEA", 508: "EMEA", 516: "EMEA",
  562: "EMEA", 566: "EMEA", 646: "EMEA", 686: "EMEA",
  694: "EMEA", 706: "EMEA", 710: "EMEA", 728: "EMEA",
  729: "EMEA", 748: "EMEA", 834: "EMEA", 768: "EMEA",
  788: "EMEA", 800: "EMEA", 894: "EMEA", 716: "EMEA",
  678: "EMEA",
  // ── AP — South & Central Asia ────────────────────────────
    4: "AP",  50: "AP",  64: "AP", 356: "AP",
  462: "AP", 524: "AP", 586: "AP", 144: "AP",
  398: "AP", 417: "AP", 496: "AP", 762: "AP",
  795: "AP", 860: "AP",
  // ── AP — East & Southeast Asia ───────────────────────────
  156: "AP", 392: "AP", 408: "AP", 410: "AP",
   96: "AP", 116: "AP", 360: "AP", 418: "AP",
  458: "AP", 104: "AP", 608: "AP", 702: "AP",
  764: "AP", 626: "AP", 704: "AP",
  // ── AP — Russia ──────────────────────────────────────────
  643: "AP",
  // ── AP — Oceania ─────────────────────────────────────────
   36: "AP", 242: "AP", 554: "AP", 598: "AP",
   90: "AP", 548: "AP", 776: "AP", 882: "AP",
};

export default function WorldNetworkMap() {
  return (
    <div className="relative w-full select-none" style={{ cursor: "default" }}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 153, center: [10, 20] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => parseInt(geo.id as string, 10) !== ANTARCTICA_ID)
              .map((geo) => {
                const id = parseInt(geo.id as string, 10);
                const region = countryRegion[id];
                const rd = region ? regionData[region] : null;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="none"
                    style={{
                      default: { outline: "none", fill: rd ? rd.color : "#e0e0e8" },
                      hover:   { outline: "none", fill: rd ? rd.color : "#e0e0e8" },
                      pressed: { outline: "none", fill: rd ? rd.color : "#e0e0e8" },
                    }}
                  />
                );
              })
          }
        </Geographies>

        {/* Region labels — always visible, rendered last so always on top */}
        {(Object.entries(regionData) as [RegionKey, typeof regionData[RegionKey]][]).map(([key, r]) => (
          <Marker key={key} coordinates={r.coords}>
            <text
              textAnchor="middle"
              style={{ fontFamily: "'Times New Roman', Times, serif", pointerEvents: "none" }}
            >
              <tspan x="0" dy="0" style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.14em", fill: "#ffffff" }}>
                {r.label}
              </tspan>
              <tspan x="0" dy="13" style={{ fontSize: "8.5px", fontWeight: "400", letterSpacing: "0.04em", fill: "rgba(255,255,255,0.70)" }}>
                {r.offices} OFFICES
              </tspan>
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
