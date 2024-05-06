import { Overlay } from "@/components/overlay";
import { Mosaic } from "@/components/twitch/mosaic";
import { SettingsProvider } from "@/providers/settings.provider";

export default function Page() {
  return (
    <SettingsProvider>
      <main className="flex-1">
        <Overlay />
        <Mosaic />
      </main>
    </SettingsProvider>
  );
}
