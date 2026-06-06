"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="min-h-[100dvh] flex items-center py-20 lg:py-24 relative overflow-hidden"
      style={{ background: "oklch(0.37 0.23 265)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.52 0.20 25), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal"
              style={{ color: "oklch(0.82 0.12 25)" }}
            >
              Get in Touch
            </span>
            <h2
              className="font-display font-800 leading-tight mb-6 reveal"
              style={{
                color: "white",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
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

            {/* Contact details */}
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
                    <p className="text-xs font-medium mb-0.5" style={{ color: "oklch(0.65 0.04 262)" }}>
                      {c.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.92 0.02 262)" }}>
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl p-8 lg:p-10 reveal-right"
            style={{ background: "white" }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                  style={{ background: "oklch(0.52 0.20 25)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
                    <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-display font-700 text-2xl mb-3"
                  style={{ color: "oklch(0.13 0.01 262)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "oklch(0.50 0.008 262)" }}>
                  Thank you for reaching out. A member of our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="font-display font-700 text-xl mb-6"
                  style={{ color: "oklch(0.13 0.01 262)" }}
                >
                  Send an Enquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                    <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Ltd" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@acme.com" required />
                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "oklch(0.38 0.01 262)" }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                      style={{
                        border: "1.5px solid oklch(0.88 0.008 262)",
                        color: form.service ? "oklch(0.13 0.01 262)" : "oklch(0.60 0.005 262)",
                      }}
                    >
                      <option value="">Select a service…</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Surface Freight</option>
                      <option>Customs Broking</option>
                      <option>Cargo Insurance</option>
                      <option>Warehousing &amp; Logistics</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "oklch(0.38 0.01 262)" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your shipment requirements…"
                      className="w-full rounded-lg px-4 py-2.5 text-sm resize-none outline-none transition-colors"
                      style={{ border: "1.5px solid oklch(0.88 0.008 262)", color: "oklch(0.13 0.01 262)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-colors duration-200"
                    style={{ background: "oklch(0.52 0.20 25)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "oklch(0.44 0.22 25)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.20 25)")
                    }
                  >
                    Send Enquiry
                  </button>
                </form>
              </>
            )}
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
        className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
        style={{
          border: "1.5px solid oklch(0.88 0.008 262)",
          color: "oklch(0.13 0.01 262)",
        }}
      />
    </div>
  );
}
