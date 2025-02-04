# Discord SDK

## Overview

Discord HTTP API (Preview): The Discord TypeScript SDK exposes the full capabilities of the v10 API, enabling you to build bots and applications that manage servers, channels, messages, interactions, and more.

The SDK is regularly updated to include the latest changes from the OpenAPI spec at https://github.com/discord/discord-api-spec/blob/main/specs/openapi.json


Discord Developer Documentation
<https://discord.com/developers/docs>

### Available Operations

* [getOpenidConnectUserinfo](#getopenidconnectuserinfo)

## getOpenidConnectUserinfo

### Example Usage

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
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
import { getOpenidConnectUserinfo } from "@ryan.blunden/discord-sdk/funcs/getOpenidConnectUserinfo.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await getOpenidConnectUserinfo(discord, {
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
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
| `security`                                                                                                                                                                     | [operations.GetOpenidConnectUserinfoSecurity](../../models/operations/getopenidconnectuserinfosecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OAuth2GetOpenIDConnectUserInfoResponse](../../models/components/oauth2getopenidconnectuserinforesponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.APIError      | 5XX                  | \*/\*                |