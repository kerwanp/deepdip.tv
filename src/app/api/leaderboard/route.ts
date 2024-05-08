import { fetchLeaderboard } from "@/lib/deepdip";

export async function GET() {
  const data = await fetchLeaderboard();
  return new Response(JSON.stringify(data));
}
