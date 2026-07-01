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
      description="Zambia is landlocked — getting sea freight to and from Lusaka requires a forwarder who knows the port corridors. Hill + Delamain operates via Dar es Salaam, Beira, Durban, and Walvis Bay, offering both FCL and LCL groupage with competitive rates and reliable schedules."
      accent="oklch(0.37 0.23 265)"
      features={[
        { title: "FCL — Full Container", body: "20ft and 40ft container loads managed end-to-end, from origin port to your door in Zambia." },
        { title: "LCL Groupage", body: "Share a container and pay only for the space you use. Ideal for shipments under a full container load." },
        { title: "Port Corridors", body: "Dar es Salaam, Beira, Durban, and Walvis Bay — established relationships at all four major ports serving Zambia." },
        { title: "Full Documentation", body: "Bills of lading, ZRA import declarations, port health certificates — complete documentation management." },
        { title: "Worldwide Cargo Handling", body: "The Shipping Division handles all manner of cargoes, world-wide — from general goods to specialist commodities, with the expertise to manage every stage of the journey." },
        { title: "Interior Destinations", body: "A particular specialisation is in the movement of goods by container, FCL and LCL, to interior destinations often not served by the shipping lines themselves." },
        { title: "H&D Through Bills of Lading", body: "Shipments are covered by H&D Through Bills of Lading, utilising at destination the services of either H&D subsidiary companies or reputable agents to ensure seamless delivery." },
      ]}
      ctaLabel="Get a Sea Freight Quote"
    />
  );
}
