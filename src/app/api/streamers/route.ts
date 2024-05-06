import { fetchStreamersData } from "@/lib/api";

export async function GET() {
  const data = await fetchStreamersData();
  return new Response(JSON.stringify(data));
}
