import { SITE } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/product", priority: 0.9 },
    { path: "/service", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}