"use client";

import { useSettings } from "@/providers/settings.provider";
import { LiveStream } from "./live-stream";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export const Mosaic = () => {
  const { shownStreamers: streamers } = useSettings();

  const className = useMemo(() => {
    if (streamers.length <= 1) {
      return "grid-cols-1 grid-rows-1";
    }

    if (streamers.length <= 2) {
      return "grid-cols-2 grid-rows-1";
    }

    if (streamers.length <= 4) {
      return "grid-cols-2 grid-rows-2";
    }

    if (streamers.length <= 6) {
      return "grid-cols-3 grid-rows-2";
    }

    if (streamers.length <= 9) {
      return "grid-cols-3 grid-rows-3";
    }

    if (streamers.length <= 12) {
      return "grid-cols-4 grid-rows-3";
    }
  }, [streamers]);

  return (
    <div className={cn("grid h-screen", className)}>
      {streamers.map((streamer) => (
        <LiveStream key={streamer.displayName} channel={streamer.twitch!} />
      ))}
    </div>
  );
};
