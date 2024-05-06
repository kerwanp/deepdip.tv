"use client";

import config, { Streamer } from "@/config";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useStreamers } from "./streamers.provider";
import { StreamerData } from "@/lib/api";

type SettingsState = {
  languages: string[];
  setLanguages: (languages: string[]) => void;
  shownStreamers: StreamerData[];
};

const SettingsContext = createContext<SettingsState | null>(null);

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [languages, setLanguages] = useState<string[]>([]);

  const { streamers } = useStreamers();

  const shownStreamers = useMemo(() => {
    let shownStreamers = streamers.filter((s) => !!s.stream);

    if (languages.length) {
      shownStreamers = shownStreamers.filter((s) =>
        languages.includes(s.streamer.language),
      );
    }

    return shownStreamers;
  }, [languages, streamers]);

  return (
    <SettingsContext.Provider
      value={{
        languages,
        setLanguages,
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
