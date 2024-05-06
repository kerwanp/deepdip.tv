import { Overlay } from "@/components/overlay";
import { Mosaic } from "@/components/twitch/mosaic";

export default function Page() {
  return (
    <main className="flex-1">
      <Overlay />
      <Mosaic />
    </main>
  );
}
