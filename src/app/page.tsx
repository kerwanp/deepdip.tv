import { fetchStreamersData } from "@/lib/api";

export default async function Home() {
  const test = await fetchStreamersData();

  return <main></main>;
}
