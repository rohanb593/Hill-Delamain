"use client";

import Image from "next/image";
import Link from "next/link";

const TEXT = "oklch(0.22 0.01 262)";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Air Freight",            href: "/services" },
    { label: "Sea Freight",            href: "/services" },
    { label: "Surface Freight",        href: "/services" },
    { label: "Customs Broking",        href: "/services" },
    { label: "Warehousing & Logistics",href: "/services" },
  ],
  Company: [
    { label: "About Us",    href: "/about" },
    { label: "Our Network", href: "/network" },
    { label: "Our Team",    href: "/team" },
    { label: "Contact Us",  href: "/contact" },
  ],
  Affiliations: [
    { label: "ZCFAA", href: "#" },
    { label: "TAZ",   href: "#" },
    { label: "ZCILT", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.94 0.005 262)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/hd-logo-footer.png"
                alt="Hill + Delamain"
                width={72}
                height={32}
                className="h-9 w-auto object-contain"
              />
              <span
                className="font-sans font-semibold text-base"
                style={{ color: TEXT, letterSpacing: "0.01em" }}
              >
                Hill + Delamain
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT, maxWidth: "36ch" }}>
              Zambia&apos;s leading clearing and freight forwarding company.
              Established 1965. Majority Zambian owned.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: TEXT, maxWidth: "36ch" }}>
              7216 Kachidza Road, Lusaka, Zambia<br />
              Tel: +260-211-286480<br />
              logistics@hdcargo.co.zm
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="font-semibold text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: TEXT }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: TEXT }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.20 25)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = TEXT)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(0.88 0.01 262)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: TEXT }}>
            &copy; {new Date().getFullYear()} Hill + Delamain. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: TEXT }}>
            Reg. No. 4861 | TPIN: 1001630844
          </p>
        </div>
      </div>
    </footer>
  );
}
