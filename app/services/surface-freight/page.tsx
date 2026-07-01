import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Surface Freight Zambia | Road Transport | Hill + Delamain",
  description:
    "Road transport across Zambia and into the DRC Copperbelt. Own fleet of 20 vehicles with truck capacity of 1, 3, 5, 10 and 24 tons.",
  keywords: [
    "surface freight Zambia",
    "road transport Zambia",
    "cross-border freight Zambia",
    "road freight Lusaka",
    "truck hire Zambia",
    "freight Copperbelt",
    "road haulage Zambia",
    "DRC freight Zambia",
  ],
};

export default function SurfaceFreightPage() {
  return (
    <ServicePageLayout
      eyebrow="Surface Freight"
      title={<>Road Transport<br /><span style={{ color: "oklch(0.52 0.20 25)" }}>Across Zambia &amp; Beyond</span></>}
      description="Hill + Delamain operates its own fleet of 20 vehicles — Truck capacities of 1, 3, 5, 10 and 24 tons — covering all Zambian routes and transport into the DRC Copperbelt."
      accent="oklch(0.52 0.20 25)"
      features={[
        { title: "Own Fleet", body: "20 vehicles with truck capacity of 1, 3, 5, 10 and 24 tons — we don't rely on third-party hauliers for critical freight." },
        { title: "Cross-Border Corridors", body: "Border posts covered include Chirundu, Livingstone, Kazungula, Nakonde, Kasumbalesa, Katima Mulilo, Chanida and Mwami — full regional reach across southern and central Africa." },
        { title: "Domestic Distribution", body: "Full coverage across Zambia including Lusaka, the Copperbelt, and all major regional routes." },
        { title: "Continental Transport", body: "Inter-continental road transport linking Zambia to South Africa, Tanzania, and the wider SADC region." },
        { title: "Tracked & Reliable", body: "All surface freight shipments are tracked and managed by our operations team from pickup to delivery." },
      ]}
      ctaLabel="Get a Surface Freight Quote"
    />
  );
}
