"use client";

import { LiveStream } from "./live-stream";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { StreamerData } from "@/lib/api";

type MosaicProps = {
  streamers: StreamerData[]
}

export const Mosaic = ({ streamers }: MosaicProps) => {

  const className = useMemo(() => {
    if (streamers.length <= 1) {
      return "grid-cols-1 grid-rows-1";
    }

    if (streamers.length <= 2) {
      return "grid-cols-1 grid-rows-2";
    }

    if (streamers.length <= 4) {
      return "grid-cols-2 grid-rows-2";
    }

    if (streamers.length <= 6) {
      return "grid-cols-3 grid-rows-2";
    }

    if (streamers.length <= 9) {
      return "md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-3";
    }

    return "md:grid-cols-3 md:grid-row-3 lg:grid-cols-4 lg:grid-rows-3";
  }, [streamers]);

  return (
    <div className={cn("grid h-screen", className)}>
      {streamers.map((streamer) => (
        <LiveStream
          key={streamer.streamer.twitch}
          channel={streamer.streamer.twitch}
        />
      ))}
    </div>
  );
};
