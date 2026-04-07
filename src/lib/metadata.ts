import { seoKeywords, siteConfig } from "@/data/site";

export function getMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const canonical = path === "/" ? siteConfig.domain : `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}
