import type { MetadataRoute } from "next";

const BASE_URL = "https://darc.barcelona";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/publicidad`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/branding`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/fotografia`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/audiovisual`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/agencias`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/festivales`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
