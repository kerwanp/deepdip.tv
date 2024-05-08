'use client';

import { Mosaic } from "@/components/twitch/mosaic"
import { TwitchChat } from "@/components/twitch/twitch-chat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useStreamers } from "@/providers/streamers.provider";
import { Maximize } from "lucide-react";
import { useState } from "react";

type PageProps = {
  params: { streamers: string[] }
}

export default function Page({ params }: PageProps) {
  const [fullScreen, setFullscreen] = useState(false);
  const { streamers } = useStreamers()
  const shown = streamers.filter(s => params.streamers.includes(s.streamer.twitch))

  const defaultTab = shown[0].streamer.twitch

  return <div className="flex-1 flex">
    <div className={cn("flex-1 relative group", {
      "h-screen w-screen absolute top-0 left-0": fullScreen
    })}>
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
        <Button size="icon" onClick={() => setFullscreen(v => !v)}><Maximize /></Button>
      </div>
      <Mosaic streamers={shown} />
    </div>
    <Tabs className="flex flex-col" defaultValue={defaultTab}>
      <TabsList>
        {shown.map(s => (
          <TabsTrigger key={s.streamer.twitch} value={s.streamer.twitch}>{s.streamer.displayName}</TabsTrigger>
        ))}
      </TabsList>
      {shown.map((s) => (
        <TabsContent className="flex-1 w-[350px]" value={s.streamer.twitch}>
          <TwitchChat channel={s.streamer.twitch} height="100%" />
        </TabsContent>
      ))}
    </Tabs>
  </div>
}
