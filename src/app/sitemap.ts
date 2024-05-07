import config from "@/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const streamerPages: MetadataRoute.Sitemap = config.streamers.map((s) => ({
    url: `https://deepdip.tv/${s.twitch}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: "always",
  }));

  return [
    {
      url: "https://deepdip.tv",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://deepdip.tv/top",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.6,
    },
    ...streamerPages,
  ];
}
