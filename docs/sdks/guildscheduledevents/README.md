# GuildScheduledEvents
(*guildScheduledEvents*)

## Overview

### Available Operations

* [get](#get)
* [list](#list)

## get

### Example Usage

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guildScheduledEvents.get({
    guildId: "<value>",
    guildScheduledEventId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildScheduledEventsGet } from "@ryan.blunden/discord-sdk/funcs/guildScheduledEventsGet.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildScheduledEventsGet(discord, {
    guildId: "<value>",
    guildScheduledEventId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildScheduledEventRequest](../../models/operations/getguildscheduledeventrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildScheduledEventResponseBody](../../models/operations/getguildscheduledeventresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## list

### Example Usage

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guildScheduledEvents.list({
    guildId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildScheduledEventsList } from "@ryan.blunden/discord-sdk/funcs/guildScheduledEventsList.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildScheduledEventsList(discord, {
    guildId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildScheduledEventsRequest](../../models/operations/listguildscheduledeventsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildScheduledEventsResponseBody[]](../../models/.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |