export const metadata = {
  title: "Privacy Policy | Hill + Delamain",
  description:
    "Privacy policy for Hill + Delamain Limited. Learn how we collect, use, and protect your personal information in accordance with Zambian data protection law.",
};

const TEXT = "oklch(0.22 0.01 262)";
const MUTED = "oklch(0.45 0.01 262)";

const sections = [
  {
    title: "1. Who We Are",
    body: `Hill + Delamain Limited ("we", "us", "our") is a freight forwarding and customs broking company registered in Zambia (Reg. No. 119680004861, TPIN: 1001630844). Our registered office is at 7216 Kachidza Road, Lusaka, Zambia.

We are committed to protecting your personal information and handling it in a transparent, lawful, and responsible manner in accordance with the Data Protection Act, 2021 (Zambia) and applicable international standards.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect personal information in the following categories:

Contact and identity information: name, job title, company name, email address, telephone number, and postal address.

Shipment and transaction information: cargo descriptions, consignee and shipper details, customs declarations, invoices, bills of lading, and other trade documents.

Communications: enquiries, emails, and messages you send us through this website or directly.

Website usage data: IP address, browser type, and pages visited, collected via essential cookies required for the website to function.

We do not collect sensitive personal data (such as health information or biometric data) in the ordinary course of our business.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your personal information to:

— Provide, manage, and deliver our freight forwarding, customs broking, warehousing, and logistics services.
— Prepare quotes, invoices, and shipping documents.
— Comply with customs, tax, and regulatory requirements imposed by ZRA and other authorities.
— Communicate with you about your enquiries and shipments.
— Improve the quality and efficiency of our services.
— Send service-related notifications and, where you have consented, relevant commercial communications.
— Detect and prevent fraud, errors, and other unlawful activity.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal information on the following legal grounds:

Contract performance: processing necessary to fulfil our obligations to you or to take steps at your request before entering a contract.

Legal obligation: processing necessary to comply with customs, tax, trade, and other applicable laws.

Legitimate interests: processing necessary for our legitimate business interests, including improving our services and preventing fraud, where those interests are not overridden by your rights.

Consent: where you have given us explicit consent, such as for marketing communications. You may withdraw consent at any time.`,
  },
  {
    title: "5. Sharing Your Information",
    body: `We share your personal information only where necessary:

Service partners: carriers, shipping lines, port authorities, customs agents, warehouses, and other logistics providers who assist us in delivering your shipment.

Regulatory and government bodies: the Zambia Revenue Authority (ZRA), Zambia Police, and other authorities where required by law or for customs clearance.

Professional advisors: lawyers, accountants, and auditors bound by confidentiality obligations.

We do not sell your personal data to third parties. When we engage sub-processors, we require them to protect your information to a standard equivalent to ours.`,
  },
  {
    title: "6. International Transfers",
    body: `As a freight forwarding company, your shipment information may be shared with parties in countries other than Zambia, including countries of origin, transit, and destination. Where we transfer personal data internationally, we take appropriate steps to ensure it is protected, including relying on standard contractual arrangements or equivalent safeguards.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or regulatory requirements. Customs and trade documents are typically retained for a minimum of seven years in accordance with Zambian tax and customs regulations. Contact and enquiry records are generally retained for three years after last contact.`,
  },
  {
    title: "8. Cookies",
    body: `Our website uses essential cookies only — small text files placed on your device that are necessary for the website to function correctly. We do not use third-party tracking or advertising cookies.

We use Google Search Console to monitor how our website appears in Google Search results. This tool does not collect personal data from visitors to our site.

You can control or disable cookies through your browser settings. Disabling essential cookies may affect website functionality.`,
  },
  {
    title: "9. Your Rights",
    body: `Under the Data Protection Act, 2021 (Zambia), you have the right to:

— Access the personal information we hold about you.
— Correct inaccurate or incomplete information.
— Request erasure of your information where it is no longer needed.
— Object to or restrict certain types of processing.
— Withdraw consent at any time where processing is based on consent.

To exercise any of these rights, please contact us using the details in Section 11. We will respond within 30 days. We may need to verify your identity before fulfilling a request.`,
  },
  {
    title: "10. Security",
    body: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, destruction, or alteration. These include access controls, encrypted communications, and staff training. While we take reasonable precautions, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions about this Privacy Policy, wish to exercise your rights, or want to raise a complaint, please contact:

Hill + Delamain Limited
7216 Kachidza Road, Lusaka, Zambia
Email: logistics@hdcargo.co.zm
Tel: +260-211-286480

If you are not satisfied with our response, you have the right to lodge a complaint with the Zambia Information and Communications Technology Authority (ZICTA), which oversees data protection in Zambia.`,
  },
  {
    title: "12. Updates to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The current version is always available on this page. We encourage you to review it periodically. Material changes will be communicated where required by law.`,
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ background: "white" }}>
      {/* Header */}
      <div
        className="py-20 px-6"
        style={{ background: "oklch(0.94 0.005 262)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
            style={{ color: "oklch(0.52 0.20 25)" }}
          >
            Legal
          </p>
          <h1
            className="font-sans font-bold text-4xl lg:text-5xl mb-4"
            style={{ color: TEXT }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: MUTED }}>
            Last updated: June 2025
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-base leading-relaxed mb-12" style={{ color: MUTED }}>
          This Privacy Policy explains how Hill + Delamain Limited collects,
          uses, shares, and protects personal information in connection with our
          freight forwarding, customs broking, and logistics services, and in
          connection with your use of this website.
        </p>

        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2
                className="font-sans font-semibold text-lg mb-4"
                style={{ color: TEXT }}
              >
                {s.title}
              </h2>
              <div className="space-y-3">
                {s.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div
          className="mt-16 p-6 rounded-xl border"
          style={{
            background: "oklch(0.97 0.003 262)",
            borderColor: "oklch(0.88 0.01 262)",
          }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: TEXT }}>
            Questions about your data?
          </p>
          <p className="text-sm" style={{ color: MUTED }}>
            Email us at{" "}
            <a
              href="mailto:logistics@hdcargo.co.zm"
              className="font-medium underline"
              style={{ color: TEXT }}
            >
              logistics@hdcargo.co.zm
            </a>{" "}
            or call{" "}
            <a
              href="tel:+260211286480"
              className="font-medium underline"
              style={{ color: TEXT }}
            >
              +260-211-286480
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
