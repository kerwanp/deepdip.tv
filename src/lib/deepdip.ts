export type Leaderboard = UserLeaderboard[];

export type UserLeaderboard = {
  rank: number;
  wsid: string;
  height: number;
  ts: number;
  name: string;
  update_count: number;
};

export function fetchLeaderboard(): Promise<Leaderboard> {
  return fetch("https://dips-plus-plus.xk.io/leaderboard/global", {
    next: { revalidate: 60 },
    headers: {
      "User-Agent": "deepdip.tv;kerwan.",
    },
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
