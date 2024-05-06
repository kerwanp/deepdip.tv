import config from "@/config";

export type AccessToken = {
  access_token: string;
  expires_in: number;
  token_type: "bearer";
};

export function fetchAppAccessToken(): Promise<AccessToken> {
  const data = {
    client_id: config.twitch.clientId,
    client_secret: config.twitch.clientSecret,
    grant_type: "client_credentials",
  };

  const body = [];

  for (const [key, value] of Object.entries(data)) {
    body.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  return fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    body: body.join("&"),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    next: { revalidate: 120 },
  }).then((r) => r.json());
}

export type Stream = {
  id: string;
  user_id: string;
  user_login: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  tags: string[];
  is_mature: boolean;
};

export async function fetchStreamsData(logins: string[]): Promise<Stream[]> {
  const token = await fetchAppAccessToken();

  const url = new URL("https://api.twitch.tv/helix/streams");

  for (const user of logins) {
    url.searchParams.append("user_login", user);
  }

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Client-Id": config.twitch.clientId,
    },
    next: { revalidate: 10 },
  })
    .then((r) => r.json())
    .then((r) => r.data);
}
