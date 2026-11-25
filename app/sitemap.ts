import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { works } from "@/lib/works";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "", priority: 1 },
    { path: "/service", priority: 0.9 },
    { path: "/works", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${siteConfig.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...works.map((w) => ({
      url: `${siteConfig.url}/works/${w.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
