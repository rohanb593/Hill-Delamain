"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/network",  label: "Global Network" },
  { href: "/team",     label: "Our Team" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] bg-white shadow-sm py-2">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/hd-logo-nav.png"
            alt="Hill & Delamain"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive
                    ? "oklch(0.44 0.22 25)"
                    : "oklch(0.50 0.008 262)",
                  borderBottom: isActive
                    ? "1.5px solid oklch(0.44 0.22 25)"
                    : "1.5px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white rounded transition-colors duration-200"
            style={{ background: "oklch(0.44 0.22 25)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "oklch(0.35 0.20 25)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "oklch(0.44 0.22 25)")
            }
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 mb-1.5"
            style={{
              background: "oklch(0.13 0.01 262)",
              transition: "transform 200ms ease-out",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 mb-1.5"
            style={{
              background: "oklch(0.13 0.01 262)",
              transition: "opacity 200ms ease-out",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5"
            style={{
              background: "oklch(0.13 0.01 262)",
              transition: "transform 200ms ease-out",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "white", borderColor: "oklch(0.92 0.01 262)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "oklch(0.28 0.13 262)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-semibold text-white rounded text-center"
            style={{ background: "oklch(0.44 0.22 25)" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
