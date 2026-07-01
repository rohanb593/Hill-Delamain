"use client";

import Image from "next/image";
import Link from "next/link";

const TEXT = "oklch(0.22 0.01 262)";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Air Freight",            href: "/services/air-freight" },
    { label: "Sea Freight",            href: "/services/sea-freight" },
    { label: "Surface Freight",        href: "/services/surface-freight" },
    { label: "Customs Broking",        href: "/services/customs-broking" },
    { label: "Warehousing & Logistics",href: "/services/warehousing" },
    { label: "Domestic Distribution",  href: "/services/domestic-distribution" },
  ],
  Company: [
    { label: "About Us",    href: "/about" },
    { label: "Our Network", href: "/network" },
    { label: "Our Team",    href: "/team" },
    { label: "Contact Us",  href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy",     href: "/privacy-policy" },
  ],
  Affiliations: [
    { label: "ZRA",   href: "https://www.zra.org.zm/" },
    { label: "ZCFAA", href: "https://zcfaa.com/" },
    { label: "TAZ",   href: "https://www.tazambia.com/" },
    { label: "ZCILT", href: "https://zcas.ac.zm/zcas-professional/all-programmes/zambia-chartered-institute-of-logistics-and-transport-zcilt/" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.94 0.005 262)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">

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
              Established 1965.
            </p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: TEXT, maxWidth: "36ch" }}>
              7216 Kachidza Road, Lusaka, Zambia<br />
              Tel: +260-211-286480<br />
              logistics@hdcargo.co.zm
            </p>
            <a
              href="https://wa.me/260979021321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ background: "#25D366", color: "white" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
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
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
          <p className="text-xs text-center" style={{ color: TEXT }}>
            All business is conducted in accordance with our{" "}
            <a
              href="/HDZ-Standard-Trading-Conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.20 25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = TEXT)}
            >
              Standard Trading Conditions
            </a>
          </p>
          <p className="text-xs" style={{ color: TEXT }}>
            Reg. No. 119680004861 | TPIN: 1001630844
          </p>
        </div>
      </div>
    </footer>
  );
}
