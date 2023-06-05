import { Context } from "hono";
import Environment from "../environment";
import TwitchFetcher from "twitch-fetcher";

export default function withTwitch(c: Context): TwitchFetcher {
    const env = c.env as Environment;
    const fetcher = new TwitchFetcher({
      auth: {
        accessToken: env.TWITCH_ACCESS_TOKEN,
        clientId: env.TWITCH_CLIENT_ID
      }
    })
    return fetcher;
}