type Config = {
  languages: LanguageConfig[];
  streamers: Streamer[];
};

type LanguageConfig = {
  id: string;
  label: string;
};

export type Streamer = {
  displayName: string;
  language: string;
  twitch: string;
  youtube?: string;
};

const config: Config = {
  languages: [
    {
      id: "en",
      label: "English",
    },
    {
      id: "fr",
      label: "Français",
    },
  ],
  streamers: [
    {
      displayName: "WirtualTM",
      twitch: "wirtual",
      language: "en",
    },
    {
      displayName: "BrenTM",
      twitch: "bren_tm2",
      language: "en",
    },
    {
      displayName: "Larstm",
      twitch: "lars_tm",
      language: "en",
    },
    {
      displayName: "CarlJr",
      twitch: "carljrtm",
      language: "en",
    },
    {
      displayName: "MonsieurBolet",
      twitch: "monsieurbolet",
      language: "fr",
    },
    {
      displayName: "Scrapie",
      twitch: "scrapie",
      language: "en",
    },
    {
      displayName: "Hasardu.",
      twitch: "hazardu",
      language: "en",
    },
    {
      displayName: "WosileTM",
      twitch: "WosileTM",
      language: "fr",
    },
    {
      displayName: "AR_Mudda",
      twitch: "mudda_tm",
      language: "en",
    },
    {
      displayName: "TarporTM",
      twitch: "tarpor",
      language: "en",
    },
  ],
};

export default config;
