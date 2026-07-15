import PageHero from "../components/Contact/PageHero";
import CTA from "../components/CTA/CTA";
import JsonLd from "../components/JsonLd";
import { buildMetadata, breadcrumbSchema, SITE } from "../../lib/seo";

const HERO_IMG =
  "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_2000/v1784083662/cb00a7b8-f1b2-4ef6-83c2-3351a8c0b345-2_djl69w.jpg";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Radha Krishna Bio Plantic — Chilkana Road, Saharanpur – 247001. Call +91 79769 86709 for fruit, horticulture and sandalwood plants.",
  path: "/contact",
  keywords: [
    "plant nursery contact Saharanpur",
    "nursery phone number Saharanpur",
    "पौधे नर्सरी संपर्क",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE.url}/contact#page`,
  url: `${SITE.url}/contact`,
  name: "Contact Radha Krishna Bio Plantic",
  description:
    "Contact details for Radha Krishna Bio Plantic, a plant nursery on Chilkana Road, Saharanpur.",
  mainEntity: { "@id": `${SITE.url}/#business` },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk plants"
        titleHi="हमसे संपर्क करें"
        sub="Have a question about varieties, quantities or delivery? Our team is happy to help you plan the right orchard for your land."
        image={HERO_IMG}
      />
      <CTA />
    </main>
  );
}