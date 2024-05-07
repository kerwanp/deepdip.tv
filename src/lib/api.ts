import config, { Streamer } from "@/config";
import { fetchLiveHeight } from "./deepdip";
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

  const result = [];
  for (const streamer of streamers) {
    const liveheight = await fetchLiveHeight(streamer.trackmania);
    result.push({
      streamer,
      online: !!streams.find((s) => s.user_login === streamer.twitch),
      // leaderboard: leaderboard.find((l) => l.wsid === streamer.trackmania),
      currentHeight: parseInt(liveheight?.last_5_points[0][0].toFixed() || "0"),
    });
  }

  return result;
}
