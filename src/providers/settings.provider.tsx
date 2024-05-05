"use client";

import config, { Streamer } from "@/config";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type SettingsState = {
  languages: string[];
  setLanguages: (languages: string[]) => void;
  streamers: string[];
  setStreamers: (streamers: string[]) => void;
  shownStreamers: Streamer[];
};

const SettingsContext = createContext<SettingsState | null>(null);

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [languages, setLanguages] = useState<string[]>([]);
  const [streamers, setStreamers] = useState<string[]>(
    config.streamers.map((s) => s.twitch),
  );

  const shownStreamers = useMemo(() => {
    let shownStreamers = config.streamers;

    if (languages.length) {
      shownStreamers = shownStreamers.filter((s) =>
        languages.includes(s.language),
      );
    }

    shownStreamers = shownStreamers.filter((s) => streamers.includes(s.twitch));

    return shownStreamers;
  }, [languages, streamers]);

  return (
    <SettingsContext.Provider
      value={{
        languages,
        setLanguages,
        streamers,
        setStreamers,
        shownStreamers,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("SettingsContext not found");
  return context;
};
