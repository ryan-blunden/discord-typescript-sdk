# Github
(*webhooks.github*)

## Overview

### Available Operations

* [execute](#execute)

## execute

### Example Usage

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  await discord.webhooks.github.execute({
    webhookId: "<value>",
    webhookToken: "<value>",
    githubWebhook: {
      sender: {
        id: 61384,
        login: "Erica.Hodkiewicz",
        htmlUrl: "https://muddy-bob.com",
        avatarUrl: "https://pretty-mantua.net",
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { webhooksGithubExecute } from "@ryan.blunden/discord-sdk/funcs/webhooksGithubExecute.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksGithubExecute(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    githubWebhook: {
      sender: {
        id: 61384,
        login: "Erica.Hodkiewicz",
        htmlUrl: "https://muddy-bob.com",
        avatarUrl: "https://pretty-mantua.net",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExecuteGithubCompatibleWebhookRequest](../../models/operations/executegithubcompatiblewebhookrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExecuteGithubCompatibleWebhookSecurity](../../models/operations/executegithubcompatiblewebhooksecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |