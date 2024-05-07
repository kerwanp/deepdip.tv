export type Leaderboard = UserLeaderboard[];

export type UserLeaderboard = {
  rank: number;
  wsid: string;
  height: number;
  ts: number;
  name: string;
};

export function fetchLeaderboard(): Promise<Leaderboard> {
  return fetch("https://api.deepdip2.com/leaderboard", {
    next: { revalidate: 30 },
  }).then((r) => r.json());
}

export type LiveHeight = {
  display_name: string;
  user_id: string;
  height: number;
};

export function fetchLiveHeights(): Promise<LiveHeight[]> {
  return fetch(`https://dips-plus-plus.xk.io/live_heights/global`, {
    next: { revalidate: 15 },
    headers: {
      "User-Agent": "deepdip.tv;kerwan.",
    },
  }).then((r) => r.json());
}
