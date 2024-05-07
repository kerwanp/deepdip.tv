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
  last_5_points: [number, number][];
};

export function fetchLiveHeight(
  trackmaniaId: string,
): Promise<LiveHeight | null> {
  return fetch(`https://dips-plus-plus.xk.io/live_heights/${trackmaniaId}`, {
    next: { revalidate: 30 },
  })
    .then((r) => r.json())
    .catch((e) => null);
}
