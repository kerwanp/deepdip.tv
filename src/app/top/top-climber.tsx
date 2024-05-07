"use client";

import { TwitchChat } from "@/components/twitch/twitch-chat";
import { TwitchPlayer } from "@/components/twitch/twitch-player";
import { useStreamers } from "@/providers/streamers.provider";
import Image from "next/image";

export function TopClimber() {
  let { streamers } = useStreamers();

  streamers = streamers
    .filter((s) => s.online)
    .sort((a, b) => b.currentHeight - a.currentHeight);

  const streamer = streamers[0];

  return (
    <div className="flex flex-1 relative">
      <Image
        src="/spinner.svg"
        width={32}
        height={32}
        alt="spinner"
        className="invert absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
      />
      <div className="flex-1">
        <TwitchPlayer
          height="100%"
          width="100%"
          channel={streamer.streamer.twitch}
        />
      </div>
      <TwitchChat channel={streamer.streamer.twitch} height="100%" />
    </div>
  );
}
