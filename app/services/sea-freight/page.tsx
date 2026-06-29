import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Sea Freight Zambia | Hill + Delamain",
  description:
    "FCL and LCL sea freight to and from Zambia via Dar es Salaam, Beira, and Durban. Competitive rates, reliable schedules, full documentation support.",
  keywords: [
    "sea freight Zambia",
    "FCL Zambia",
    "LCL groupage Zambia",
    "sea freight Lusaka",
    "container shipping Zambia",
    "Dar es Salaam freight Zambia",
    "Beira corridor Zambia",
    "Durban freight Zambia",
  ],
};

export default function SeaFreightPage() {
  return (
    <ServicePageLayout
      eyebrow="Sea Freight"
      title={<>Sea Freight &amp;<br /><span style={{ color: "oklch(0.37 0.23 265)" }}>Container Shipping</span></>}
      description="Zambia is landlocked — getting sea freight to and from Lusaka requires a forwarder who knows the port corridors. Hill + Delamain operates via Dar es Salaam, Beira, and Durban, offering both FCL and LCL groupage with competitive rates and reliable schedules."
      accent="oklch(0.37 0.23 265)"
      features={[
        { title: "FCL — Full Container", body: "20ft and 40ft container loads managed end-to-end, from origin port to your door in Zambia." },
        { title: "LCL Groupage", body: "Share a container and pay only for the space you use. Ideal for shipments under a full container load." },
        { title: "Port Corridors", body: "Dar es Salaam, Beira, and Durban — established relationships at all three major ports serving Zambia." },
        { title: "Full Documentation", body: "Bills of lading, ZRA import declarations, port health certificates — complete documentation management." },
      ]}
      ctaLabel="Get a Sea Freight Quote"
    />
  );
}
