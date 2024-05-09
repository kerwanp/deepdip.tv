"use client";

import { StreamerData } from "@/lib/api";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useStreamers } from "./streamers.provider";

type SettingsState = {
  languages: string[];
  setLanguages: (languages: string[]) => void;
  shown: string[];
  setShown: (shown: string[]) => void;
  shownStreamers: StreamerData[];
  maxStreams: number,
  setMaxStreams: (maxStreams: number) => void
};

const SettingsContext = createContext<SettingsState | null>(null);

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { streamers } = useStreamers();

  const [languages, setLanguages] = useState<string[]>([]);
  const [maxStreams, setMaxStreams] = useState<number>(9);
  const [shown, setShown] = useState<string[]>(
    streamers.map((s) => s.streamer.twitch),
  );

  const shownStreamers = useMemo(() => {
    let shownStreamers = streamers.filter((s) => s.online).splice(0, maxStreams || 9);

    if (languages.length) {
      shownStreamers = shownStreamers.filter((s) =>
        languages.includes(s.streamer.language),
      );
    }

    shownStreamers = shownStreamers.filter((s) =>
      shown.includes(s.streamer.twitch),
    );

    shownStreamers.sort((a, b) =>
      a.streamer.twitch.localeCompare(b.streamer.twitch),
    );

    return shownStreamers;
  }, [languages, streamers, shown, maxStreams]);

  return (
    <SettingsContext.Provider
      value={{
        languages,
        setLanguages,
        shownStreamers,
        shown,
        setShown,
        maxStreams,
        setMaxStreams
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
