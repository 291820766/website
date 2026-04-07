import type { MetadataRoute } from "next";

import { navigation, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navigation.map((item) => ({
    url: item.href === "/" ? siteConfig.domain : `${siteConfig.domain}${item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
