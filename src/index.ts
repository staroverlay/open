import { Hono } from 'hono';
import {cors} from "hono/cors";

import Provider from 'twitch-fetcher/lib/entities/provider';

import NotFoundException from './errors/NotFoundException';
import { withStrArrayQuery } from './utils/withQuery';
import withTwitch from './utils/withTwitch';
import { withChannel } from './utils/withChannel';

const app = new Hono();

/* Middlewares */
app.use("*", cors({
  allowMethods: ["GET"],
  origin: ["*"]
}));

/* Routes */

// Status check.
app.get("/", async (c) => {
  return c.json({
    online: true,
    version: "1.0.0",
    website: "https://github.com/streamoverlay/open"
  }, 200);
});

// Fetch channel.
app.get('/twitch/channel', async (c) => {
  const twitch = withTwitch(c);
  const { id, username } = withChannel(c);
  let channel = null;

  if (id) {
    channel = await twitch.getChannel(id).catch(() => null);
  } else if (username) {
    channel = await twitch.getChannelByUsername(username).catch(() => null);
  }

  if (channel == null) {
    throw new NotFoundException("Twitch user not found");
  }

  return c.json({ channel }, 200);
});


// Fetch emotes.
app.get('/twitch/emotes', async (c) => {
  const twitch = withTwitch(c);
  const { id, username } = withChannel(c);
  const providers = withStrArrayQuery(c, "providers", true) || ["twitch"];

  let emotes = null;
  if (id) {
    emotes = await twitch.getEmotes(id, providers as Provider[]).catch(() => null);
  } else if (username) {
    emotes = await twitch.getEmotesByUsername(username, providers as Provider[]).catch(() => null);
  }

  if (emotes == null) {
    throw new NotFoundException("Twitch user not found");
  }

  return c.json({ emotes }, 200);
});

// Handle 404 error.
app.all('*', async (c) => {
  const path = c.req.path;
  throw new NotFoundException('Path ' + path + ' not found.');
});

export default app;
