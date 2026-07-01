import Link from "next/link";

export const metadata = {
  title: "Access Forbidden | Hill + Delamain",
};

export default function Forbidden() {
  return (
    <main
      className="min-h-[100dvh] flex items-center justify-center px-6"
      style={{ background: "oklch(0.97 0.005 258)" }}
    >
      <div className="max-w-xl w-full">

        {/* Dual accent bar */}
        <div className="flex h-1 rounded-full overflow-hidden mb-12">
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
        </div>

        {/* 403 number */}
        <p
          className="font-display font-800 leading-none mb-6 select-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 10rem)",
            letterSpacing: "-0.05em",
            color: "oklch(0.90 0.01 262)",
          }}
        >
          403
        </p>

        {/* Message */}
        <h1
          className="font-display font-700 leading-tight mb-4"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            letterSpacing: "-0.02em",
            color: "oklch(0.13 0.01 262)",
          }}
        >
          Access forbidden
        </h1>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "oklch(0.50 0.008 262)", maxWidth: "38ch" }}
        >
          You don&apos;t have permission to view this resource. If you believe this is a mistake, please contact us.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-white rounded-lg text-sm transition-opacity duration-150 hover:opacity-85"
            style={{ background: "oklch(0.52 0.20 25)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-lg text-sm transition-opacity duration-150 hover:opacity-70"
            style={{
              color: "oklch(0.50 0.008 262)",
              border: "1px solid oklch(0.88 0.01 262)",
              background: "white",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex h-1 rounded-full overflow-hidden mt-12">
          <div className="flex-1" style={{ background: "oklch(0.37 0.23 265)" }} />
          <div className="flex-1" style={{ background: "oklch(0.52 0.20 25)" }} />
        </div>

      </div>
    </main>
  );
}
