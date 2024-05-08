'use client';

import { Mosaic } from "@/components/twitch/mosaic"
import { TwitchChat } from "@/components/twitch/twitch-chat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStreamers } from "@/providers/streamers.provider";

type PageProps = {
  params: { streamers: string[] }
}

export default function Page({ params }: PageProps) {
  const { streamers } = useStreamers()
  const shown = streamers.filter(s => params.streamers.includes(s.streamer.twitch))

  return <div className="flex-1 flex">
    <div className="flex-1">
      <Mosaic streamers={shown} />
    </div>
    <Tabs className="flex flex-col">
      <TabsList>
        {shown.map(s => (
          <TabsTrigger key={s.streamer.twitch} value={s.streamer.twitch}>{s.streamer.displayName}</TabsTrigger>
        ))}
      </TabsList>
      {shown.map(s => (
        <TabsContent className="flex-1" value={s.streamer.twitch}>
          <TwitchChat channel={s.streamer.twitch} height="100%" />
        </TabsContent>
      ))}
    </Tabs>
  </div>
}
