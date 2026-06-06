"use client";

import Image from "next/image";

const footerLinks = {
  Services: [
    "Air Freight",
    "Sea Freight",
    "Surface Freight",
    "Customs Broking",
    "Cargo Insurance",
    "Warehousing & Logistics",
  ],
  Company: ["About Us", "Our Network", "Our Team", "Contact Us"],
  Affiliations: ["IATA (67-4 7390)", "ZCFAA", "TAZ", "ZCILT"],
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.13 0.01 262)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/hd-logo-nav.png"
                alt="Hill + Delamain"
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span
                className="font-sans font-semibold"
                style={{ color: "white", fontSize: "1.1rem", letterSpacing: "0.01em" }}
              >
                Hill + Delamain
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "oklch(0.60 0.01 262)", maxWidth: "36ch" }}
            >
              Zambia&apos;s leading clearing and freight forwarding company.
              Established 1965. Majority Zambian owned.
            </p>
            <p
              className="text-xs leading-relaxed mb-6"
              style={{ color: "oklch(0.48 0.008 262)", maxWidth: "36ch" }}
            >
              7216 Kachidza Road, Lusaka, Zambia<br />
              Tel: +260-211-286480<br />
              logistics@hdcargo.co.zm
            </p>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "oklch(1 0 0 / 0.07)" }}
                aria-label="LinkedIn"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.20 25)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.07)")
                }
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: "white" }}>
                  <path d="M4.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 8h3v9H3V8zm4.5 0H11v1.2c.5-.9 1.7-1.5 3-1.5 2.3 0 4 1.5 4 4.5V17h-3v-4.5c0-1-.7-1.8-1.7-1.8s-1.8.8-1.8 1.8V17H7.5V8z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "oklch(1 0 0 / 0.07)" }}
                aria-label="X / Twitter"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.20 25)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.07)")
                }
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: "white" }}>
                  <path d="M16.5 3h-2.7L10 7.8 6.2 3H3l5.8 7.5L3.2 17H6l4.1-5.1 4 5.1h3.1l-5.9-7.6L16.5 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="font-semibold text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: "oklch(0.50 0.008 262)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    {heading === "Affiliations" ? (
                      <span className="text-sm" style={{ color: "oklch(0.65 0.01 262)" }}>{l}</span>
                    ) : (
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "oklch(0.65 0.01 262)" }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "oklch(0.82 0.12 25)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "oklch(0.65 0.01 262)")
                        }
                      >
                        {l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(1 0 0 / 0.07)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.45 0.005 262)" }}>
            &copy; {new Date().getFullYear()} Hill + Delamain. All rights reserved. Reg. No. 4861 | TPIN: 1001630844
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "oklch(0.45 0.005 262)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "oklch(0.82 0.12 25)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "oklch(0.45 0.005 262)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
