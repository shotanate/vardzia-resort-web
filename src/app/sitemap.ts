import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO Update with your production URL
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://vardziaresort.com";

  // Define all your routes
  const routes = [
    "",
    "/home",
    "/about-us",
    "/rooms",
    "/bar-and-restaurant",
    "/services",
  ];

  // Generate sitemap entries for each route
  const sitemapEntries = routes.map((route) => {
    const url = `${baseUrl}${route}`;

    return {
      url,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ka: `${baseUrl}/ka${route}`,
        },
      },
    };
  });

  return sitemapEntries;
}
