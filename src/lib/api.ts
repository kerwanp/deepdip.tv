import config, { Streamer } from "@/config";
import { UserLeaderboard, fetchLeaderboard } from "./deepdip";
import { Stream, fetchStreamsData } from "./twitch";

export type StreamerData = {
  streamer: Streamer;
  stream?: Stream;
  leaderboard?: UserLeaderboard;
};

export async function fetchStreamersData(): Promise<StreamerData[]> {
  const streamers = config.streamers;

  const leaderboard = await fetchLeaderboard();
  const streams = await fetchStreamsData(streamers.map((s) => s.twitch));

  return streamers.map((streamer) => ({
    streamer,
    stream: streams.find((s) => s.user_login === streamer.twitch),
    leaderboard: leaderboard.find((l) => l.wsid === streamer.trackmania),
  }));
}
