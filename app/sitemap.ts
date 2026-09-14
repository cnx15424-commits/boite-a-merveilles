import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boite-a-merveilles.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/litterature`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/autobiographie`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/auteur`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/personnages`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lieux`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/paratexte`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fiche-lecture`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/test-diagnostique`,
      lastModified: new Date(),
    },
  ];
}