import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tools.chercode.com";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/colors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/fonts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
