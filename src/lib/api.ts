import config, { Streamer } from "@/config";
import { fetchLiveHeights } from "./deepdip";
import { fetchStreamsData } from "./twitch";

export type StreamerData = {
  streamer: Streamer;
  online: boolean;
  currentHeight: number;
};

export async function fetchStreamersData(): Promise<StreamerData[]> {
  const streamers = config.streamers;

  // const leaderboard = await fetchLeaderboard();
  const streams = await fetchStreamsData(streamers.map((s) => s.twitch));
  const heights = await fetchLiveHeights();

  const result = [];
  for (const streamer of streamers) {
    const liveheight =
      heights.find((h) => h.user_id === streamer.trackmania)?.height ?? 0;

    result.push({
      streamer,
      online: !!streams.find((s) => s.user_login === streamer.twitch),
      // leaderboard: leaderboard.find((l) => l.wsid === streamer.trackmania),
      currentHeight: parseInt(liveheight.toFixed()),
    });
  }

  return result;
}
