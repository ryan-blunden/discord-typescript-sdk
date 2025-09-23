# Stickers
(*stickers*)

## Overview

### Available Operations

* [listGuildStickers](#listguildstickers) - Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
* [createGuildSticker](#createguildsticker) - Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.
* [getGuildSticker](#getguildsticker) - Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
* [deleteGuildSticker](#deleteguildsticker) - Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.
* [updateGuildSticker](#updateguildsticker) - Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.
* [listPacks](#listpacks) - Returns a list of available sticker packs.
* [getPack](#getpack) - Returns a sticker pack object for the given sticker pack ID.
* [get](#get) - Returns a sticker object for the given sticker ID.

## listGuildStickers

Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_stickers" method="get" path="/guilds/{guild_id}/stickers" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.listGuildStickers({
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
import { stickersListGuildStickers } from "@ryan.blunden/discord-sdk/funcs/stickersListGuildStickers.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersListGuildStickers(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersListGuildStickers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildStickersRequest](../../models/operations/listguildstickersrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildStickersResponse](../../models/operations/listguildstickersresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## createGuildSticker

Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_guild_sticker" method="post" path="/guilds/{guild_id}/stickers" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.createGuildSticker({
    guildId: "<value>",
    requestBody: {
      name: "<value>",
      tags: "<value>",
      file: "<value>",
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
import { stickersCreateGuildSticker } from "@ryan.blunden/discord-sdk/funcs/stickersCreateGuildSticker.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersCreateGuildSticker(discord, {
    guildId: "<value>",
    requestBody: {
      name: "<value>",
      tags: "<value>",
      file: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersCreateGuildSticker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGuildStickerRequest](../../models/operations/createguildstickerrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGuildStickerResponse](../../models/operations/createguildstickerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getGuildSticker

Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_sticker" method="get" path="/guilds/{guild_id}/stickers/{sticker_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.getGuildSticker({
    guildId: "<value>",
    stickerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersGetGuildSticker } from "@ryan.blunden/discord-sdk/funcs/stickersGetGuildSticker.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersGetGuildSticker(discord, {
    guildId: "<value>",
    stickerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersGetGuildSticker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildStickerRequest](../../models/operations/getguildstickerrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildStickerResponse](../../models/operations/getguildstickerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## deleteGuildSticker

Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_sticker" method="delete" path="/guilds/{guild_id}/stickers/{sticker_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.deleteGuildSticker({
    guildId: "<value>",
    stickerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersDeleteGuildSticker } from "@ryan.blunden/discord-sdk/funcs/stickersDeleteGuildSticker.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersDeleteGuildSticker(discord, {
    guildId: "<value>",
    stickerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersDeleteGuildSticker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildStickerRequest](../../models/operations/deleteguildstickerrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildStickerResponse](../../models/operations/deleteguildstickerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateGuildSticker

Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_sticker" method="patch" path="/guilds/{guild_id}/stickers/{sticker_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.updateGuildSticker({
    guildId: "<value>",
    stickerId: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersUpdateGuildSticker } from "@ryan.blunden/discord-sdk/funcs/stickersUpdateGuildSticker.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersUpdateGuildSticker(discord, {
    guildId: "<value>",
    stickerId: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersUpdateGuildSticker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildStickerRequest](../../models/operations/updateguildstickerrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildStickerResponse](../../models/operations/updateguildstickerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listPacks

Returns a list of available sticker packs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_sticker_packs" method="get" path="/sticker-packs" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.stickers.listPacks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersListPacks } from "@ryan.blunden/discord-sdk/funcs/stickersListPacks.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await stickersListPacks(discord);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersListPacks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.ListStickerPacksSecurity](../../models/operations/liststickerpackssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListStickerPacksResponse](../../models/operations/liststickerpacksresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getPack

Returns a sticker pack object for the given sticker pack ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_sticker_pack" method="get" path="/sticker-packs/{pack_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.getPack({
    packId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersGetPack } from "@ryan.blunden/discord-sdk/funcs/stickersGetPack.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersGetPack(discord, {
    packId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersGetPack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStickerPackRequest](../../models/operations/getstickerpackrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStickerPackResponse](../../models/operations/getstickerpackresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## get

Returns a sticker object for the given sticker ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_sticker" method="get" path="/stickers/{sticker_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.stickers.get({
    stickerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { stickersGet } from "@ryan.blunden/discord-sdk/funcs/stickersGet.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await stickersGet(discord, {
    stickerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stickersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStickerRequest](../../models/operations/getstickerrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStickerResponse](../../models/operations/getstickerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |