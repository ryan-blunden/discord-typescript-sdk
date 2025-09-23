# Soundboards
(*soundboards*)

## Overview

### Available Operations

* [sendSoundboardSound](#sendsoundboardsound) - Sends a soundboard sound to a channel.
* [listGuildSoundboardSounds](#listguildsoundboardsounds) - Returns a list of soundboard sound objects for the given guild.
* [createGuildSoundboardSound](#createguildsoundboardsound) - Create a new soundboard sound for the guild. Returns the new soundboard sound object on success.
* [getGuildSoundboardSound](#getguildsoundboardsound) - Returns a soundboard sound object for the given guild and sound IDs.
* [deleteGuildSoundboardSound](#deleteguildsoundboardsound) - Delete a soundboard sound from a guild. Returns 204 No Content on success.
* [updateGuildSoundboardSound](#updateguildsoundboardsound) - Update a soundboard sound in a guild. Returns the updated soundboard sound object on success.
* [getSoundboardDefaultSounds](#getsoundboarddefaultsounds) - Returns a list of the default sounds available in the soundboard.

## sendSoundboardSound

Sends a soundboard sound to a channel.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="send_soundboard_sound" method="post" path="/channels/{channel_id}/send-soundboard-sound" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.sendSoundboardSound({
    channelId: "<value>",
    soundboardSoundSendRequest: {
      soundId: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsSendSoundboardSound } from "@ryan.blunden/discord-sdk/funcs/soundboardsSendSoundboardSound.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsSendSoundboardSound(discord, {
    channelId: "<value>",
    soundboardSoundSendRequest: {
      soundId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsSendSoundboardSound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendSoundboardSoundRequest](../../models/operations/sendsoundboardsoundrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SendSoundboardSoundResponse](../../models/operations/sendsoundboardsoundresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listGuildSoundboardSounds

Returns a list of soundboard sound objects for the given guild.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_soundboard_sounds" method="get" path="/guilds/{guild_id}/soundboard-sounds" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.listGuildSoundboardSounds({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsListGuildSoundboardSounds } from "@ryan.blunden/discord-sdk/funcs/soundboardsListGuildSoundboardSounds.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsListGuildSoundboardSounds(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsListGuildSoundboardSounds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildSoundboardSoundsRequest](../../models/operations/listguildsoundboardsoundsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildSoundboardSoundsResponse](../../models/operations/listguildsoundboardsoundsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## createGuildSoundboardSound

Create a new soundboard sound for the guild. Returns the new soundboard sound object on success.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_guild_soundboard_sound" method="post" path="/guilds/{guild_id}/soundboard-sounds" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.createGuildSoundboardSound({
    guildId: "<value>",
    soundboardCreateRequest: {
      name: "<value>",
      sound: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsCreateGuildSoundboardSound } from "@ryan.blunden/discord-sdk/funcs/soundboardsCreateGuildSoundboardSound.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsCreateGuildSoundboardSound(discord, {
    guildId: "<value>",
    soundboardCreateRequest: {
      name: "<value>",
      sound: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsCreateGuildSoundboardSound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGuildSoundboardSoundRequest](../../models/operations/createguildsoundboardsoundrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGuildSoundboardSoundResponse](../../models/operations/createguildsoundboardsoundresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getGuildSoundboardSound

Returns a soundboard sound object for the given guild and sound IDs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_soundboard_sound" method="get" path="/guilds/{guild_id}/soundboard-sounds/{sound_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.getGuildSoundboardSound({
    guildId: "<value>",
    soundId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsGetGuildSoundboardSound } from "@ryan.blunden/discord-sdk/funcs/soundboardsGetGuildSoundboardSound.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsGetGuildSoundboardSound(discord, {
    guildId: "<value>",
    soundId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsGetGuildSoundboardSound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildSoundboardSoundRequest](../../models/operations/getguildsoundboardsoundrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildSoundboardSoundResponse](../../models/operations/getguildsoundboardsoundresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## deleteGuildSoundboardSound

Delete a soundboard sound from a guild. Returns 204 No Content on success.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_soundboard_sound" method="delete" path="/guilds/{guild_id}/soundboard-sounds/{sound_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.deleteGuildSoundboardSound({
    guildId: "<value>",
    soundId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsDeleteGuildSoundboardSound } from "@ryan.blunden/discord-sdk/funcs/soundboardsDeleteGuildSoundboardSound.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsDeleteGuildSoundboardSound(discord, {
    guildId: "<value>",
    soundId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsDeleteGuildSoundboardSound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildSoundboardSoundRequest](../../models/operations/deleteguildsoundboardsoundrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildSoundboardSoundResponse](../../models/operations/deleteguildsoundboardsoundresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateGuildSoundboardSound

Update a soundboard sound in a guild. Returns the updated soundboard sound object on success.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_soundboard_sound" method="patch" path="/guilds/{guild_id}/soundboard-sounds/{sound_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.updateGuildSoundboardSound({
    guildId: "<value>",
    soundId: "<value>",
    soundboardPatchRequestPartial: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsUpdateGuildSoundboardSound } from "@ryan.blunden/discord-sdk/funcs/soundboardsUpdateGuildSoundboardSound.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsUpdateGuildSoundboardSound(discord, {
    guildId: "<value>",
    soundId: "<value>",
    soundboardPatchRequestPartial: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsUpdateGuildSoundboardSound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildSoundboardSoundRequest](../../models/operations/updateguildsoundboardsoundrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildSoundboardSoundResponse](../../models/operations/updateguildsoundboardsoundresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getSoundboardDefaultSounds

Returns a list of the default sounds available in the soundboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_soundboard_default_sounds" method="get" path="/soundboard-default-sounds" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.soundboards.getSoundboardDefaultSounds();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { soundboardsGetSoundboardDefaultSounds } from "@ryan.blunden/discord-sdk/funcs/soundboardsGetSoundboardDefaultSounds.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await soundboardsGetSoundboardDefaultSounds(discord);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("soundboardsGetSoundboardDefaultSounds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSoundboardDefaultSoundsResponse](../../models/operations/getsoundboarddefaultsoundsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |