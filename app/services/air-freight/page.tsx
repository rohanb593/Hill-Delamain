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
      description="Hill + Delamain handles air consolidations and charter cargo through Lusaka Kenneth Kaunda International Airport and Ndola Simon Mwansa Kapwepwe Airport. We manage the full cycle — origin pickup, export documentation, transit, customs clearance on arrival, and final delivery across Zambia."
      accent="oklch(0.52 0.20 25)"
      features={[
        { title: "Air Consolidations", body: "LCL groupage for smaller air shipments, giving you competitive rates without waiting for a full charter load." },
        { title: "Charter Cargo", body: "Time-critical or oversized freight? We arrange dedicated charter cargo services on short notice." },
        { title: "Full Documentation", body: "Air waybills, export permits, ZRA clearance — we handle the complete paperwork chain on every shipment." },
        { title: "Last-Mile Delivery", body: "Our own fleet of 20 vehicles ensures your airfreight reaches its final destination across Zambia." },
      ]}
      ctaLabel="Get an Air Freight Quote"
    />
  );
}
