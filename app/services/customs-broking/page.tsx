import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata = {
  title: "Customs Broking Lusaka | ZRA Clearance | Hill + Delamain",
  description:
    "ZRA-compliant customs broking in Zambia. Over 50 ASYCUDA profiles, ZMW 250M bond management. Expert HS classification, duty rebates, and post-clearance audit support.",
  keywords: [
    "customs broking Lusaka",
    "customs clearing Zambia",
    "ZRA customs agent",
    "ASYCUDA Zambia",
    "import clearance Zambia",
    "export clearance Zambia",
    "HS classification Zambia",
    "duty rebate Zambia",
  ],
};

export default function CustomsBrokingPage() {
  return (
    <ServicePageLayout
      eyebrow="Customs Broking"
      title={<>Customs Broking &amp;<br /><span style={{ color: "oklch(0.37 0.23 265)" }}>ZRA Clearance, Zambia</span></>}
      description="With Over 50 active ASYCUDA profiles and a ZMW 250M bond under management, Hill + Delamain is one of Zambia's most capable customs broking operations. Our team delivers accurate HS classification, timely duty rebates, and full post-clearance audit support."
      accent="oklch(0.37 0.23 265)"
      features={[
        { title: "ZRA Compliance", body: "Fully ZRA-accredited with Over 50 ASYCUDA World profiles covering all major commodity groups and trade corridors." },
        { title: "HS Classification", body: "Expert Harmonised System classification to ensure correct duty rates and avoid costly reclassification disputes." },
        { title: "Duty Rebates", body: "We identify and process applicable duty rebates, deferments, and drawbacks to minimise your landed costs." },
        { title: "Post-Clearance Audit", body: "Support through ZRA post-clearance audits with full documentation and compliance trail management." },
      ]}
      badge="ZCFAA Member · Over 50 ASYCUDA Profiles · ZMW 250M Bond · TAZ Member · ZCILT Member"
      ctaLabel="Get a Customs Broking Quote"
    />
  );
}
