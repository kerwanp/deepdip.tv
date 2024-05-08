'use client';

import { Overlay } from "@/components/overlay";
import { Mosaic } from "@/components/twitch/mosaic";
import { SettingsProvider, useSettings } from "@/providers/settings.provider";

export default function Page() {
  const { shownStreamers: streamers } = useSettings();

  return (
    <SettingsProvider>
      <main className="flex-1">
        <Overlay />
        <Mosaic streamers={streamers} />
      </main>
    </SettingsProvider>
  );
}
