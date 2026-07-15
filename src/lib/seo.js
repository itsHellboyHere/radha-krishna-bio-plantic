export const SITE = {
  url: "https://radhakrishnabioplantic.com",
  name: "Radha Krishna Bio Plantic",
  legalName: "Radha Krishna Bio Plantic",
  shortDesc:
    "Fruit, horticulture and sandalwood plants raised from superior mother stock in Saharanpur, U.P.",
  locale: "en_IN",

  contact: {
    person: "Naresh Kumar",
    phone: "+919719676828",
    phoneDisplay: "+91 97196 76828",
    whatsapp: "919719676828",
    street: "Chilkana Road",
    city: "Saharanpur",
    state: "Uttar Pradesh",
    stateCode: "UP",
    postalCode: "247001",
    country: "IN",
    lat: 29.9679,
    lng: 77.5455,
  },

  areaServed: ["Saharanpur", "Uttar Pradesh", "India"],

  keywords: [
    "plant nursery Saharanpur",
    "fruit plants Saharanpur",
    "sandalwood plants",
    "chandan plant nursery",
    "guava plant",
    "mango sapling",
    "kagzi lemon plant",
    "mosambi plant",
    "pomegranate plant",
    "nursery Chilkana Road",
    "पौधे नर्सरी सहारनपुर",
    "फलदार पौधे",
  ],

  ogImage: "/og-image.png",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = SITE.ogImage,
} = {}) {
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  const url = `${SITE.url}${path}`;

  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description,
    keywords: [...SITE.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [
        { url: image, width: 1200, height: 630, alt: SITE.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/* ---------- JSON-LD ---------- */

export function localBusinessSchema() {
  const c = SITE.contact;
  return {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.shortDesc,
    url: SITE.url,
    telephone: c.phone,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/icon.svg`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: c.street,
      addressLocality: c.city,
      addressRegion: c.state,
      postalCode: c.postalCode,
      addressCountry: c.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: c.lat,
      longitude: c.lng,
    },
    areaServed: SITE.areaServed.map((n) => ({ "@type": "Place", name: n })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#business` },
    inLanguage: ["en-IN", "hi-IN"],
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}