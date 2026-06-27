"use client";

import { useState } from "react";

const fieldBase: React.CSSProperties = {
  border: "1.5px solid oklch(0.90 0.008 262)",
  background: "oklch(0.975 0.003 262)",
  color: "oklch(0.13 0.01 262)",
  borderRadius: "8px",
  outline: "none",
  width: "100%",
  fontSize: "0.875rem",
  transition: "border-color 0.15s, background 0.15s",
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Freight Enquiry${form.company ? ` — ${form.company}` : ""}${form.service ? ` (${form.service})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Service: ${form.service || "—"}`,
      ``,
      form.message,
    ].join("\n");
    window.location.href = `mailto:logistics@hdcargo.co.zm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="min-h-[100dvh] flex items-center py-20 lg:py-24 relative overflow-hidden"
      style={{ background: "oklch(0.25 0.22 265)" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.52 0.20 25), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: Info */}
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-[0.18em] uppercase mb-4 reveal"
              style={{ color: "oklch(0.82 0.12 25)" }}
            >
              Get in Touch
            </span>
            <h2
              className="font-display font-800 leading-tight mb-6 reveal"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", textWrap: "balance" }}
            >
              Ready to Ship?
              <br />
              <span style={{ color: "oklch(0.82 0.12 25)" }}>Let&apos;s Talk.</span>
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-10 reveal"
              style={{ color: "oklch(0.78 0.03 262)", maxWidth: "46ch" }}
            >
              Tell us about your freight needs and our team in Lusaka will put
              together a solution that fits your business. We never make
              promises we cannot keep.
            </p>

            <div className="space-y-5 reveal">
              {[
                {
                  label: "Email",
                  value: "logistics@hdcargo.co.zm",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                      <rect x="2" y="5" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  value: "+260-211-286480",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                      <path d="M6.5 3h-3A1.5 1.5 0 002 4.5C2 12 8 18 15.5 18a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5c-.84 0-1.65-.14-2.4-.39a1.5 1.5 0 00-1.5.36l-1.15 1.15A11 11 0 015.38 7.55l1.15-1.15a1.5 1.5 0 00.36-1.5A9 9 0 016.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: "Head Office",
                  value: "7216 Kachidza Road, Lusaka, Zambia",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                      <ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M2.5 10h15" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                  ),
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.82 0.12 25)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "oklch(0.65 0.04 262)" }}>{c.label}</p>
                    <p className="text-base font-medium" style={{ color: "oklch(0.92 0.02 262)" }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl reveal-right"
            style={{ background: "white", boxShadow: "0 8px 40px oklch(0.20 0.15 265 / 0.25)" }}
          >
            <div
              className="px-7 lg:px-9 py-5"
              style={{ borderBottom: "1px solid oklch(0.93 0.005 262)" }}
            >
              <h3 className="font-display font-700 text-xl" style={{ color: "oklch(0.13 0.01 262)" }}>
                Send an Enquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="px-7 lg:px-9 py-6 space-y-4">

              <div className="grid sm:grid-cols-2 gap-3.5">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Ltd" required />
              </div>

              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@acme.com" required />

              <Field label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+260 955 123 456" />

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "oklch(0.38 0.01 262)" }}>
                  Service Required
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 outline-none text-sm appearance-none cursor-pointer"
                    style={{
                      ...fieldBase,
                      color: form.service ? "oklch(0.13 0.01 262)" : "oklch(0.55 0.005 262)",
                    }}
                  >
                    <option value="">Select a service…</option>
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Surface Freight</option>
                    <option>Customs Broking</option>
                    <option>Warehousing &amp; Logistics</option>
                    <option>Domestic Distribution</option>
                    <option>General Enquiry</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="12" height="12" viewBox="0 0 14 14" fill="none"
                    style={{ color: "oklch(0.55 0.005 262)" }}
                  >
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "oklch(0.38 0.01 262)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your shipment requirements…"
                  required
                  className="w-full px-3 py-2.5 text-sm resize-none outline-none"
                  style={{ ...fieldBase }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.52 0.20 25)"; e.currentTarget.style.background = "white"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.90 0.008 262)"; e.currentTarget.style.background = "oklch(0.975 0.003 262)"; }}
                />
              </div>

              <div style={{ height: "1px", background: "oklch(0.93 0.005 262)" }} />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2 transition-colors duration-200"
                style={{ background: "oklch(0.52 0.20 25)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.44 0.22 25)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.20 25)"; }}
              >
                Send Enquiry
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5" style={{ color: "oklch(0.38 0.01 262)" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2.5 outline-none"
        style={{
          border: "1.5px solid oklch(0.90 0.008 262)",
          background: "oklch(0.975 0.003 262)",
          color: "oklch(0.13 0.01 262)",
          borderRadius: "8px",
          width: "100%",
          fontSize: "0.875rem",
          transition: "border-color 0.15s, background 0.15s",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "oklch(0.52 0.20 25)"; e.currentTarget.style.background = "white"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.90 0.008 262)"; e.currentTarget.style.background = "oklch(0.975 0.003 262)"; }}
      />
    </div>
  );
}
