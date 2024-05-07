"use client";

import { StreamerData } from "@/lib/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type StreamersState = {
  streamers: StreamerData[];
};

const StreamersContext = createContext<StreamersState | null>(null);

export type StreamersProviderProps = {
  children: ReactNode;
  streamers: StreamerData[];
};

export const StreamersProvider = (props: StreamersProviderProps) => {
  const [streamers, setStreamers] = useState(props.streamers);

  useEffect(() => {
    setInterval(() => {
      fetch("/api/streamers", { next: { revalidate: 15 } })
        .then((r) => r.json())
        .then((d) => setStreamers(d));
    }, 15000);
  }, []);

  return (
    <StreamersContext.Provider value={{ streamers }}>
      {props.children}
    </StreamersContext.Provider>
  );
};

export const useStreamers = () => {
  const context = useContext(StreamersContext);
  if (!context) throw new Error("StreamersContext not found");
  return context;
};
