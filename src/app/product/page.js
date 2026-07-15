import ProductHero from "../components/product/ProductHero/ProductHero";
import ProductGrid from "../components/product/ProductHero/ProductGrid/ProductGrid";
import Reveal from "../components/product/ProductHero/Reveal/Reveal";
import CTABand from "../components/CTABand/CTABand";
import JsonLd from "../components/JsonLd";
import { buildMetadata, breadcrumbSchema, SITE } from "../../lib/seo";

const REVEAL_VIDEO =
  "https://res.cloudinary.com/t3frjw0o/video/upload/f_auto,q_auto,vc_auto,w_1600,br_1200k/v1784088105/grok-video-b1975ef9-4373-4f9c-84f4-1aae8a65a499-2_sejxmb.mp4";

const REVEAL_POSTER =
  "https://res.cloudinary.com/t3frjw0o/video/upload/f_auto,q_auto,w_1600,so_0/v1784088105/grok-video-b1975ef9-4373-4f9c-84f4-1aae8a65a499-2_sejxmb.jpg";

export const metadata = buildMetadata({
  title: "Our Plants — Fruit, Horticulture & Sandalwood",
  description:
    "Guava, mosambi, kagzi lemon, sandalwood, mango and pomegranate plants — raised from superior mother stock in Saharanpur and delivered to your field.",
  path: "/product",
  keywords: [
    "buy guava plant Saharanpur",
    "sandalwood plant nursery",
    "kagzi lemon plant price",
    "mango sapling Saharanpur",
    "अमरूद का पौधा",
    "चंदन का पौधा",
  ],
});

const PLANTS = [
  { name: "Guava", alt: "अमरूद", img: "/products/guava.jpg" },
  { name: "Mosambi", alt: "मौसंबी", img: "/products/mosambi.jpg" },
  { name: "Kagzi Lemon", alt: "कागज़ी नींबू", img: "/products/lemon.jpg" },
  { name: "Sandalwood", alt: "चंदन", img: "/products/sandalwood.jpg" },
  { name: "Mango", alt: "आम", img: "/products/mango.jpg" },
  { name: "Pomegranate", alt: "अनार", img: "/products/pomegranate.jpg" },
];

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/product#list`,
  name: "Plants offered by Radha Krishna Bio Plantic",
  description:
    "Fruit, horticulture and sandalwood plants raised from superior mother stock in Saharanpur.",
  numberOfItems: PLANTS.length,
  itemListElement: PLANTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name} Plant`,
    image: `${SITE.url}${p.img}`,
    url: `${SITE.url}/product`,
  })),
};

export default function ProductPage() {
  return (
    <main>
      <JsonLd data={productListSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Plants", path: "/product" },
        ])}
      />

      <ProductHero />
      <Reveal src={REVEAL_VIDEO} poster={REVEAL_POSTER} video />
      <ProductGrid />
      <CTABand />
    </main>
  );
}