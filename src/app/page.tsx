'use client';

import { Overlay } from "@/components/overlay";
import { Mosaic } from "@/components/twitch/mosaic";
import { SettingsProvider, useSettings } from "@/providers/settings.provider";

export default function Page() {

  return (
    <SettingsProvider>
      <PageContent />
    </SettingsProvider>
  );
}

const PageContent = () => {
  const { shownStreamers: streamers } = useSettings();
  return (
    <main className="flex-1">
      <Overlay />
      <Mosaic streamers={streamers} />
    </main>
  )
}
