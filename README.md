# Open

An open API for public Twitch services.

## Integrations

### Services

| App          | Supported |
| :----------- | :-------: |
| Kick         |    ❌    |
| Trovo        |    ❌    |
| Twitch       |    ✅    |
| YouTube      |    ❌    |

### 3rd Party

| App          | Supported | Available on |
| :----------- | :-------: | --------------: |
| 7TV          |    ✅    | Twitch           |
| BetterTTV    |    ✅    | Twitch           |
| FrankerFaceZ |    ✅    | Twitch           |

## API

### Get channel emotes

`GET /twitch/emotes?...`

| Query     | Type       | Description      | Required | Default value |
| :-------- | ---------- | ---------------- | :------: | ------------: |
| ID        | `String`   | Channel ID       |    ⚠   | `null`         |
| Username  | `String`   | Channel username |    ⚠   | `null`         |
| Providers | `String[]` | Channel username |    ❌   | twitch         |

> **Note:** You can use username or ID, however you must enter at least one.

> **Note 2:** Available providers: twitch, 7tv bttv, ffz.

> **Note 3:** Arrays must follow the following format: `/path?array=first,second,third`

### Get channel info

`GET /twitch/channel?...`

| Query     | Type     | Description      | Required | Default value |
| :-------- | -------- | ---------------- | :------: | ------------: |
| ID        | `String` | Channel ID       |    ⚠   | `null`         |
| Username  | `String` | Channel username |    ⚠   | `null`         |

> **Note:** You can use username or ID, however you must enter at least one.

## Deploy

Create a `.dev.vars` file and store your secret token. See example from `.dev.vars_sample`.

### Development

```bash
yarn
yarn dev
```

### Go to Production

```bash
yarn deploy
```
