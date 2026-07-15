import { SITE } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "/",        priority: 1.0, freq: "weekly"  },
    { path: "/product", priority: 0.9, freq: "monthly" },
    { path: "/service", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly"  },
    { path: "/about",   priority: 0.7, freq: "monthly"  },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}