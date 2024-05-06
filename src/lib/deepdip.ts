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
    next: { revalidate: 5 },
  }).then((r) => r.json());
}
