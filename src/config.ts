type Config = {
  languages: LanguageConfig[];
  streamers: Streamer[];
  twitch: {
    clientId: string;
    clientSecret: string;
  };
};

type LanguageConfig = {
  id: string;
  label: string;
};

export type Streamer = {
  displayName: string;
  language: string;
  twitch: string;
  trackmania: string;
  youtube?: string;
};

const config: Config = {
  twitch: {
    clientId: process.env.TWITCH_CLIENT_ID!,
    clientSecret: process.env.TWITCH_CLIENT_SECRET!,
  },
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
      trackmania: "bd45204c-80f1-4809-b983-38b3f0ffc1ef",
      language: "en",
    },
    {
      displayName: "BrenTM",
      twitch: "bren_tm2",
      language: "en",
      trackmania: "5d6b14db-4d41-47a4-93e2-36a3bf229f9b",
    },
    {
      displayName: "Larstm",
      twitch: "lars_tm",
      language: "en",
      trackmania: "e3ff2309-bc24-414a-b9f1-81954236c34b",
    },
    {
      displayName: "CarlJr",
      twitch: "carljrtm",
      language: "en",
      trackmania: "0c857beb-fd95-4449-a669-21fb310cacae",
    },
    {
      displayName: "MonsieurBolet",
      twitch: "monsieurbolet",
      language: "fr",
      trackmania: "2a9faa84-5928-4eeb-a000-b44f46a50530",
    },
    {
      displayName: "Scrapie",
      twitch: "scrapie",
      language: "en",
      trackmania: "da4642f9-6acf-43fe-88b6-b120ff1308ba",
    },
    {
      displayName: "Hazardu.",
      twitch: "hazardu",
      language: "en",
      trackmania: "e5a9863b-1844-4436-a8a8-cea583888f8b",
    },
    {
      displayName: "WosileTM",
      twitch: "WosileTM",
      language: "fr",
      trackmania: "813a3917-8850-4393-92a0-cc442d9cc4a2",
    },
    {
      displayName: "AR_Mudda",
      twitch: "mudda_tm",
      language: "en",
      trackmania: "d320a237-1b0a-4069-af83-f2c09fbf042e",
    },
    {
      displayName: "TarporTM",
      twitch: "tarpor",
      language: "en",
      trackmania: "e387f7d8-afb0-4bf6-bb29-868d1a62de3b",
    },
    {
      displayName: "eLconn21",
      twitch: "elconn21",
      language: "en",
      trackmania: "d46fb45d-d422-47c9-9785-67270a311e25",
    },
    {
      displayName: "Jave.4PF",
      twitch: "JaveTheDeemon",
      language: "en",
      trackmania: "ce9e4eb6-be30-429c-9487-20ce620c2de8",
    },
  ],
};

export default config;
