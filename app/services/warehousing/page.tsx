import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Warehousing & Logistics Zambia | Hill + Delamain",
  description:
    "5,956m² of bonded warehouse space across Lusaka, Ndola, Kitwe, and Chingola. Procurement, expediting, packing, and last-mile distribution across Zambia.",
  keywords: [
    "warehousing Zambia",
    "bonded warehouse Lusaka",
    "logistics Zambia",
    "warehouse Copperbelt",
    "bonded warehouse Ndola",
    "warehousing Kitwe",
    "distribution centre Zambia",
  ],
};

export default function WarehousingPage() {
  return (
    <ServicePageLayout
      eyebrow="Warehousing & Logistics"
      title={<>Bonded Warehousing<br /><span style={{ color: "oklch(0.52 0.20 25)" }}>Across Zambia</span></>}
      description="Hill + Delamain operates 5,956m² of warehouse space across four strategic locations: Lusaka, Ndola, Kitwe, and Chingola. Our facilities provide bonded storage, procurement support, expediting, professional packing, and last-mile distribution."
      accent="oklch(0.52 0.20 25)"
      features={[
        { title: "5,956m² of Space", body: "Bonded and general warehouse facilities across Lusaka, Ndola, Kitwe, and Chingola — strategically placed for Copperbelt and national distribution." },
        { title: "Bonded Storage", body: "ZRA-approved bonded warehousing allowing duty deferral on imported goods until they enter the domestic market." },
        { title: "Procurement & Expediting", body: "We source, expedite, and manage goods on behalf of clients — reducing your supply chain complexity." },
        { title: "Packing & Distribution", body: "Professional packing to international standards, with last-mile delivery via our own vehicle fleet across Zambia." },
      ]}
      ctaLabel="Enquire About Warehousing"
    />
  );
}
