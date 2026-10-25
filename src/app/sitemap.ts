import type { MetadataRoute } from "next";
import { seo, siteUrl } from "@/data/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = Object.values(seo);

  return entries.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
