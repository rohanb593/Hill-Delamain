"use client";

import { useEffect, useRef, useState } from "react";

const offices = [
  { name: "Lusaka — Inland Depot", type: "Head Office & Depot", lat: -15.43, lng: 28.28, hq: true },
  { name: "Lusaka — Airport", type: "Air Cargo Terminal", lat: -15.32, lng: 28.46, hq: false },
  { name: "Ndola — Inland", type: "Branch Office", lat: -12.97, lng: 28.64, hq: false },
  { name: "Ndola — Airport", type: "Air Cargo Terminal", lat: -12.95, lng: 28.67, hq: false },
  { name: "Kitwe", type: "Branch Office", lat: -12.80, lng: 28.21, hq: false },
  { name: "Chingola", type: "Branch Office", lat: -12.53, lng: 27.88, hq: false },
];

const borders = [
  { name: "Chirundu", country: "Zimbabwe", lat: -16.03, lng: 28.90 },
  { name: "Livingstone", country: "Zimbabwe / Botswana", lat: -17.85, lng: 25.87 },
  { name: "Kazungula", country: "Botswana / Namibia", lat: -17.77, lng: 25.26 },
  { name: "Nakonde", country: "Tanzania", lat: -9.37, lng: 32.68 },
  { name: "Kasumbalesa", country: "DRC", lat: -12.22, lng: 27.82 },
  { name: "Katima Mulilo", country: "Namibia", lat: -17.50, lng: 24.32 },
  { name: "Chanida", country: "Mozambique", lat: -14.99, lng: 30.39 },
  { name: "Mwami", country: "Malawi", lat: -13.40, lng: 32.90 },
];

interface PopupInfo {
  name: string;
  detail: string;
  kind: "office" | "border";
  x: number;
  y: number;
}

export type FlyToFn = (lat: number, lng: number, name: string, detail: string, kind: "office" | "border") => void;

interface ZambiaMapProps {
  onReady?: (flyTo: FlyToFn) => void;
  onMapReady?: (invalidateSize: () => void) => void;
}

export default function ZambiaMap({ onReady, onMapReady }: ZambiaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useState<PopupInfo | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Guard against React Strict Mode double-invoke and Turbopack HMR.
    // Leaflet stamps a _leaflet_id on the container when it initialises it.
    const container = mapRef.current as HTMLDivElement & { _leaflet_id?: number };
    if (container._leaflet_id) return;

    // Cancelled flag so the async import callback bails if the effect
    // was already cleaned up before Leaflet finished loading.
    let cancelled = false;
    let mapInstance: { remove: () => void; off: () => void } | null = null;

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((mod) => {
      if (cancelled || !mapRef.current) return;
      // Double-check: another effect cycle may have already initialised it.
      if ((mapRef.current as typeof container)._leaflet_id) return;

      const L = mod.default;

      const zambiaBounds = L.latLngBounds(
        L.latLng(-19.0, 20.0),
        L.latLng(-7.0, 34.5)
      );

      const map = L.map(mapRef.current, {
        center: [-13.5, 28.5],
        zoom: 5.5,
        minZoom: 5.5,
        maxZoom: 8,
        maxBounds: zambiaBounds,
        maxBoundsViscosity: 1.0,
        zoomControl: false,
        attributionControl: false,
      });

      mapInstance = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        { maxZoom: 19 }
      ).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      function officeIcon(hq: boolean) {
        const s = hq ? 18 : 13;
        return L.divIcon({
          className: "",
          html: `<div style="width:${s}px;height:${s}px;border-radius:50%;background:#C83C3C;border:2.5px solid white;box-shadow:0 2px 10px rgba(0,0,0,0.35);cursor:pointer;transition:transform 0.15s" onmouseover="this.style.transform='scale(1.35)'" onmouseout="this.style.transform='scale(1)'"></div>`,
          iconSize: [s, s],
          iconAnchor: [s / 2, s / 2],
        });
      }

      function borderIcon() {
        return L.divIcon({
          className: "",
          html: `<div style="width:11px;height:11px;background:#1E3DB4;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35);transform:rotate(45deg);cursor:pointer;transition:transform 0.15s" onmouseover="this.style.transform='rotate(45deg) scale(1.35)'" onmouseout="this.style.transform='rotate(45deg) scale(1)'"></div>`,
          iconSize: [13, 13],
          iconAnchor: [6, 6],
        });
      }

      offices.forEach((o) => {
        L.marker([o.lat, o.lng], { icon: officeIcon(o.hq) })
          .addTo(map)
          .on("click", (e: { latlng: { lat: number; lng: number } }) => {
            const pt = map.latLngToContainerPoint([e.latlng.lat, e.latlng.lng]);
            setPopup({ name: o.name, detail: o.type, kind: "office", x: pt.x, y: pt.y });
          });
      });

      borders.forEach((b) => {
        L.marker([b.lat, b.lng], { icon: borderIcon() })
          .addTo(map)
          .on("click", (e: { latlng: { lat: number; lng: number } }) => {
            const pt = map.latLngToContainerPoint([e.latlng.lat, e.latlng.lng]);
            setPopup({ name: b.name, detail: `Border post · ${b.country}`, kind: "border", x: pt.x, y: pt.y });
          });
      });

      map.on("click", () => setPopup(null));
      map.on("movestart", () => setPopup(null));

      if (onMapReady) {
        onMapReady(() => map.invalidateSize());
      }

      if (onReady) {
        onReady((lat, lng, name, detail, kind) => {
          setPopup(null);
          map.flyTo([lat, lng], 8, { duration: 1.0 });
          map.once("moveend", () => {
            const pt = map.latLngToContainerPoint([lat, lng]);
            setPopup({ name, detail, kind, x: pt.x, y: pt.y });
          });
        });
      }
    });

    return () => {
      cancelled = true;
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-2xl" />

      {popup && (
        <div
          className="absolute z-[1000] pointer-events-none"
          style={{
            left: popup.x,
            top: popup.y,
            transform: "translate(-50%, calc(-100% - 14px))",
          }}
        >
          <div
            className="rounded-xl px-4 py-3 shadow-2xl text-sm min-w-[160px]"
            style={{
              background: "white",
              border: `2px solid ${popup.kind === "office" ? "#C83C3C" : "#1E3DB4"}`,
            }}
          >
            <p className="font-semibold leading-tight mb-0.5" style={{ color: "oklch(0.13 0.01 262)" }}>
              {popup.name}
            </p>
            <p className="text-xs" style={{ color: popup.kind === "office" ? "#C83C3C" : "#1E3DB4" }}>
              {popup.detail}
            </p>
            <div
              className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-3 h-3 rotate-45"
              style={{
                background: "white",
                borderRight: `2px solid ${popup.kind === "office" ? "#C83C3C" : "#1E3DB4"}`,
                borderBottom: `2px solid ${popup.kind === "office" ? "#C83C3C" : "#1E3DB4"}`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
