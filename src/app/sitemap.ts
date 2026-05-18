import type { MetadataRoute } from "next";

const siteUrl = "https://jovan.riztama.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
