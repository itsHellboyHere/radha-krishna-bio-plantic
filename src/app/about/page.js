import PageHero from "../components/Contact/PageHero";
import Story from "../components/About/Story/Story";
import Values from "../components/About/Values/Values";
import Reach from "../components/About/Reach/Reach";
import CTABand from "../components/CTABand/CTABand";
import JsonLd from "../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

const HERO_IMG =
  "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_2000/v1784085066/fe6ce7c1-59aa-4304-b402-14a7f1cbfd7a_t3rvoe.jpg";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "A family-run nursery on Chilkana Road, Saharanpur — raising fruit, horticulture and sandalwood plants from superior mother stock for farmers across U.P.",
  path: "/about",
  keywords: ["plant nursery Chilkana Road", "nursery Saharanpur about"],
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Us"
        title="Rooted in experience"
        titleHi="अनुभव की जड़ें"
        sub="A family-run nursery on Chilkana Road, growing plants that farmers across Saharanpur have trusted season after season."
        image={HERO_IMG}
      />
      <Story />
      <Values />
      <Reach />
      <CTABand />
    </main>
  );
}