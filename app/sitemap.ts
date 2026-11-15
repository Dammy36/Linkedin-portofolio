import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    { url: site.url },
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
    ...insights
      .filter((p) => p.body && p.publishedAt)
      .map((p) => ({ url: `${site.url}/insights/${p.slug}` })),
  ];
}
