"use client";

import Image from "next/image";

const footerLinks = {
  Services: [
    "Air Freight",
    "Sea Freight",
    "Surface Freight",
    "Customs Broking",
    "Warehousing & Logistics",
  ],
  Company: ["About Us", "Our Network", "Our Team", "Contact Us"],
  Affiliations: ["ZCFAA", "TAZ", "ZCILT"],
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.17 0.01 262)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
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
              style={{ color: "oklch(0.75 0.01 262)", maxWidth: "36ch" }}
            >
              Zambia&apos;s leading clearing and freight forwarding company.
              Established 1965. Majority Zambian owned.
            </p>
            <p
              className="text-xs leading-relaxed mb-6"
              style={{ color: "oklch(0.68 0.008 262)", maxWidth: "36ch" }}
            >
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
                style={{ color: "oklch(0.62 0.008 262)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    {heading === "Affiliations" ? (
                      <span className="text-sm" style={{ color: "oklch(0.80 0.01 262)" }}>{l}</span>
                    ) : (
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "oklch(0.80 0.01 262)" }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "oklch(0.82 0.12 25)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "oklch(0.80 0.01 262)")
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
        style={{ borderColor: "oklch(1 0 0 / 0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.62 0.005 262)" }}>
            &copy; {new Date().getFullYear()} Hill + Delamain. All rights reserved. Reg. No. 4861 | TPIN: 1001630844
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "oklch(0.62 0.005 262)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "oklch(0.82 0.12 25)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "oklch(0.62 0.005 262)")
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
