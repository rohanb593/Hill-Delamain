import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Domestic Distribution Zambia | Delivery | Hill + Delamain",
  description:
    "Nationwide delivery across Zambia and into the DRC Copperbelt. Own fleet of 20 vehicles. Reliable, tracked last-mile distribution from Lusaka to all major centres.",
  keywords: [
    "domestic distribution Zambia",
    "delivery Zambia",
    "last-mile delivery Lusaka",
    "freight delivery Copperbelt",
    "logistics distribution Zambia",
    "delivery DRC Copperbelt",
    "road delivery Zambia",
  ],
};

export default function DomesticDistributionPage() {
  return (
    <ServicePageLayout
      eyebrow="Domestic Distribution"
      title={<>Nationwide Delivery<br /><span style={{ color: "oklch(0.37 0.23 265)" }}>Across Zambia</span></>}
      description="Hill + Delamain operates its own fleet of 20 delivery vehicles for domestic distribution across Zambia — from Lusaka to the Copperbelt and beyond. We also offer service delivery into the DRC Copperbelt, making us the natural choice for mining and industrial clients operating across the border."
      accent="oklch(0.37 0.23 265)"
      features={[
        { title: "Own Vehicle Fleet", body: "20 company-owned vehicles mean we control delivery quality and timelines — no reliance on subcontractors." },
        { title: "Nationwide Coverage", body: "Lusaka, Copperbelt, Solwezi, Kalumbila — all major Zambian centres covered on regular schedules." },
        { title: "DRC Copperbelt Service", body: "Cross-border delivery into the DRC Copperbelt — ideal for mining operations and industrial clients on both sides of the border." },
        { title: "Tracked Shipments", body: "All domestic deliveries are tracked and managed by our operations team with real-time status available to clients." },
      ]}
      ctaLabel="Get a Distribution Quote"
    />
  );
}
