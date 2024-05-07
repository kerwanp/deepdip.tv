import { TwitchChat } from "@/components/twitch/twitch-chat";
import { TwitchPlayer } from "@/components/twitch/twitch-player";
import config from "@/config";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: { streamer: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const streamer = config.streamers.find((s) => s.twitch === params.streamer);

  if (!streamer) {
    return {};
  }

  return {
    title: `Deep Dip TV - ${streamer.displayName}`,
    description: `Follow ${streamer.displayName} climbing the Deep Dip 2 tower.`,
  };
}

export default function Page({ params }: PageProps) {
  const streamer = config.streamers.find((s) => s.twitch === params.streamer);

  if (!streamer) {
    notFound();
  }

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
        <TwitchPlayer height="100%" width="100%" channel={streamer.twitch} />
      </div>
      <TwitchChat channel={streamer.twitch} height="100%" />
    </div>
  );
}
