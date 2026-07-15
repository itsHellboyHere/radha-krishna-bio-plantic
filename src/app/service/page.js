import PageHero from "../components/Contact/PageHero";
import ServiceList from "../components/Service/ServiceList/ServiceList";
import Process from "../components/Service/Process/Process";
import CTABand from "../components/CTABand/CTABand";
import JsonLd from "../components/JsonLd";
import { buildMetadata, breadcrumbSchema, SITE } from "../../lib/seo";

const HERO_IMG =
  "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_2000/v1784085742/grok-image-5385e9fc-af9a-4dac-aca8-67b02bbe71a3-2_rscrkc.jpg";

export const metadata = buildMetadata({
  title: "Services for Farmers",
  description:
    "Technical advisory, doorstep delivery, replacement support and on-call guidance for farmers across Saharanpur — from Radha Krishna Bio Plantic.",
  path: "/service",
  keywords: [
    "plant delivery Saharanpur",
    "farming advisory Saharanpur",
    "nursery technical support",
    "किसान सलाह सहारनपुर",
  ],
});

const SERVICES = [
  {
    name: "Technical Advisory",
    desc: "Guidance on planting methods, spacing, management practices and plant protection for better establishment and growth.",
  },
  {
    name: "Doorstep Delivery",
    desc: "Plants brought directly to your field, handled carefully in transit and ready to plant on arrival.",
  },
  {
    name: "Replacement Support",
    desc: "Help replacing plants that don't establish, so your orchard stays on track.",
  },
  {
    name: "Guidance On Call",
    desc: "Reach our team any time with questions about care, disease or seasonal work.",
  },
  {
    name: "On-Farm Demonstrations",
    desc: "Practical field guidance on correct usage, dosage and crop stages for higher yields.",
  },
  {
    name: "Organic Farming Guidance",
    desc: "Support on organic manures and bio-inputs for healthier soil and sustainable farming.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/service#list`,
  name: "Services offered by Radha Krishna Bio Plantic",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.desc,
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: SITE.areaServed.map((n) => ({ "@type": "Place", name: n })),
      url: `${SITE.url}/service`,
    },
  })),
};

export default function ServicePage() {
  return (
    <main>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/service" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title="We don't stop at the sale"
        titleHi="बिक्री के बाद भी साथ"
        sub="From choosing the right variety to caring for it season after season — our team stays with you the whole way."
        image={HERO_IMG}
      />
      <ServiceList />
      <Process />
      <CTABand />
    </main>
  );
}