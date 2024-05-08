import { fetchLeaderboard } from "@/lib/deepdip";
import { LeaderboardPage } from "./Leaderboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Dip TV - Leaderboard",
};

export default async function Page() {
  const leaderboard = await fetchLeaderboard();
  return <LeaderboardPage leaderboard={leaderboard} />
}
