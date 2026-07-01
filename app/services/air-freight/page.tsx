import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Air Freight Zambia | Hill + Delamain",
  description:
    "Air freight consolidations and charter cargo from Lusaka and Ndola airports. Full cycle management — origin to final delivery — across Zambia and internationally.",
  keywords: [
    "air freight Zambia",
    "air freight Lusaka",
    "air cargo Ndola",
    "air consolidations Zambia",
    "charter cargo Zambia",
    "freight forwarding Lusaka airport",
  ],
};

export default function AirFreightPage() {
  return (
    <ServicePageLayout
      eyebrow="Air Freight"
      title={<>Air Freight &amp;<br /><span style={{ color: "oklch(0.52 0.20 25)" }}>Cargo, Zambia</span></>}
      description="Hill + Delamain handles air consolidations and charter cargo through Kenneth Kaunda International Airport (Lusaka International Airport - LUN) and Simon Mwansa Kapwepwe International Airport (Ndola International Airport - NLA). We manage the full cycle — origin pickup, export documentation, transit, customs clearance on arrival, and final delivery across Zambia."
      accent="oklch(0.52 0.20 25)"
      topCards={[
        {
          title: "Kenneth Kaunda International Airport (LUN)",
          body: "Zambia's primary international gateway and our main hub for air freight operations. Handling the majority of imports and exports, LUN connects Zambia to global trade routes across Africa, Europe, Asia, and beyond.",
          accent: "oklch(0.37 0.23 265)",
        },
        {
          title: "Simon Mwansa Kapwepwe International Airport (NLA)",
          body: "Serving the Copperbelt — Zambia's industrial and mining heartland. Our Ndola operations ensure fast clearance and onward delivery for freight serving the region's mining, manufacturing, and energy sectors.",
          accent: "oklch(0.52 0.20 25)",
        },
      ]}
      features={[
        { title: "Air Consolidations", body: "H&D Air Cargo operates regular consolidation services by scheduled flights worldwide, giving importers competitive rates without waiting for a full charter load." },
        { title: "Charter Cargo", body: "H&D arranges dedicated charter services, part charter and specialist cargo flights covering almost any type of commodity — ideal for time-critical or oversized freight at short notice." },
        { title: "Full Documentation", body: "Air waybills, export permits, ZRA clearance — we handle the complete paperwork chain on every shipment for a seamless, compliant journey." },
        { title: "Last-Mile Delivery", body: "Our own fleet of 20+ vehicles ensures your airfreight reaches its final destination across Zambia, with delivery often effected within 24 hours of arrival." },
        { title: "Fast Customs Clearance", body: "It is the constant aim of H&D to reduce ground handling time and customs clearance. Consignees get their goods as quickly as possible — our processes are built around minimising delays from touchdown to delivery." },
        { title: "Route Flexibility & Expertise", body: "H&D's strength in air cargo derives from its route flexibility, personal service and technical knowledge. Our high standard of service is evidenced by its constantly growing customer acceptance." },
        { title: "Worldwide Scheduled Services", body: "Regular consolidation services by scheduled flights worldwide keep your supply chain moving on reliable, predictable timelines regardless of shipment size." },
      ]}
      ctaLabel="Get an Air Freight Quote"
    />
  );
}
