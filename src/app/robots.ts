import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO Update with your production URL
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://vardziaresort.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/_next/", "/static/", "/*.json$"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
