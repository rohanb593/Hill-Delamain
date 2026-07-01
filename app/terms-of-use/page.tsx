export const metadata = {
  title: "Terms of Use | Hill + Delamain",
  description:
    "Terms of use for the Hill + Delamain website. Understand your rights and responsibilities when accessing our site and requesting our services.",
};

const TEXT = "oklch(0.22 0.01 262)";
const MUTED = "oklch(0.45 0.01 262)";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Hill + Delamain website at www.hill-delamain.co.zm (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.

These Terms apply to all visitors, users, and others who access the Site. They govern your use of the Site only — they do not constitute a contract for the provision of freight or logistics services. Service-specific terms are agreed separately when you engage our services.`,
  },
  {
    title: "2. About Us",
    body: `The Site is operated by Hill + Delamain Limited, a company registered in Zambia (Reg. No. 119680004861, TPIN: 1001630844) with its registered office at 7216 Kachidza Road, Lusaka, Zambia.

We are Zambia's leading clearing and freight forwarding company, established in 1965.`,
  },
  {
    title: "3. Permitted Use",
    body: `You may use the Site for lawful purposes only. You may browse content, make enquiries, and contact us through the Site for legitimate business purposes.

You must not:

— Use the Site in any way that violates applicable Zambian or international law or regulation.
— Transmit unsolicited or unauthorised advertising or promotional material.
— Attempt to gain unauthorised access to any part of the Site or its connected systems.
— Introduce viruses, malware, or other harmful material.
— Scrape, copy, or reproduce Site content in bulk without our written permission.
— Use the Site in any way that could damage, overburden, or impair its performance.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on this Site — including text, graphics, logos, images, and software — is the property of Hill + Delamain Limited or its content suppliers and is protected by Zambian and international intellectual property law.

You may view and print pages from the Site for your own personal or internal business reference only. You must not reproduce, distribute, publish, or commercially exploit any content without our prior written consent.

The Hill + Delamain name, logo, and brand marks are registered trademarks. Nothing on this Site grants any licence or right to use them.`,
  },
  {
    title: "5. Enquiries and Communications",
    body: `When you submit an enquiry through this Site, you confirm that the information you provide is accurate and that you are authorised to make the enquiry on behalf of any business you represent.

Submitting an enquiry does not create a binding contract or guarantee the availability of our services. A formal agreement is only formed when we confirm acceptance of your instructions in writing.

We aim to respond to all enquiries within two business days. Response times may vary during public holidays or periods of high volume.`,
  },
  {
    title: "6. Accuracy of Information",
    body: `We make reasonable efforts to ensure that information on this Site is accurate and up to date. However, we do not warrant that the Site is free from errors or omissions. Service descriptions, office locations, and contact details are provided for general information and may change without notice.

Nothing on this Site constitutes professional legal, customs, or regulatory advice. You should seek appropriate professional advice before making decisions based on information found here.`,
  },
  {
    title: "7. Third-Party Links",
    body: `The Site may contain links to third-party websites, including our industry affiliates (ZRA, ZCFAA, TAZ, ZCILT) and partner organisations. These links are provided for convenience only.

We have no control over and accept no responsibility for the content, privacy practices, or availability of third-party sites. The inclusion of a link does not imply our endorsement of that site.`,
  },
  {
    title: "8. Disclaimer of Warranties",
    body: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.

To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, Hill + Delamain Limited shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your access to or use of (or inability to use) this Site.

This includes, without limitation, loss of data, loss of business, or loss of profits, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising from use of this Site shall not exceed ZMW 500.`,
  },
  {
    title: "10. Privacy",
    body: `Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: "11. Changes to the Site and These Terms",
    body: `We reserve the right to modify or discontinue the Site, or any part of it, at any time without notice. We may also update these Terms of Use from time to time. The date of the most recent revision is shown at the top of this page.

Your continued use of the Site after any changes constitutes your acceptance of the updated Terms. If you do not agree to the revised Terms, you should stop using the Site.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms of Use are governed by and construed in accordance with the laws of the Republic of Zambia. Any disputes arising out of or in connection with your use of this Site shall be subject to the exclusive jurisdiction of the courts of Zambia.`,
  },
];

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-sm" style={{ color: MUTED }}>
            Last updated: June 2025
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-base leading-relaxed mb-12" style={{ color: MUTED }}>
          These Terms of Use govern your access to and use of the Hill +
          Delamain website. Please read them carefully before browsing or
          submitting any enquiry through this Site.
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
            Questions about these Terms?
          </p>
          <p className="text-sm" style={{ color: MUTED }}>
            Contact our team at{" "}
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
