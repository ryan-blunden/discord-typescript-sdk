# Webhooks
(*webhooks*)

## Overview

### Available Operations

* [getOriginalMessage](#getoriginalmessage)
* [updateOriginalMessageJson](#updateoriginalmessagejson)
* [updateOriginalMessageForm](#updateoriginalmessageform)
* [updateOriginalMessageMultipart](#updateoriginalmessagemultipart)
* [getMessage](#getmessage)
* [executeSlackWebhook](#executeslackwebhook)
* [getByToken](#getbytoken)
* [deleteByToken](#deletebytoken)
* [updateByToken](#updatebytoken)
* [get](#get)
* [delete](#delete)
* [update](#update)

## getOriginalMessage

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.getOriginalMessage({
    webhookId: "<value>",
    webhookToken: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksGetOriginalMessage } from "discord-sdk/funcs/webhooksGetOriginalMessage.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksGetOriginalMessage(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetOriginalWebhookMessageRequest](../../models/operations/getoriginalwebhookmessagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetOriginalWebhookMessageSecurity](../../models/operations/getoriginalwebhookmessagesecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageResponse](../../models/components/messageresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## updateOriginalMessageJson

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.updateOriginalMessageJson({
    webhookId: "<value>",
    webhookToken: "<value>",
    incomingWebhookUpdateRequestPartial: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksUpdateOriginalMessageJson } from "discord-sdk/funcs/webhooksUpdateOriginalMessageJson.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksUpdateOriginalMessageJson(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    incomingWebhookUpdateRequestPartial: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateOriginalWebhookMessageJsonRequest](../../models/operations/updateoriginalwebhookmessagejsonrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateOriginalWebhookMessageJsonSecurity](../../models/operations/updateoriginalwebhookmessagejsonsecurity.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageResponse](../../models/components/messageresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## updateOriginalMessageForm

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.updateOriginalMessageForm({
    webhookId: "<value>",
    webhookToken: "<value>",
    incomingWebhookUpdateRequestPartial: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksUpdateOriginalMessageForm } from "discord-sdk/funcs/webhooksUpdateOriginalMessageForm.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksUpdateOriginalMessageForm(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    incomingWebhookUpdateRequestPartial: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateOriginalWebhookMessageFormRequest](../../models/operations/updateoriginalwebhookmessageformrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateOriginalWebhookMessageFormSecurity](../../models/operations/updateoriginalwebhookmessageformsecurity.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageResponse](../../models/components/messageresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## updateOriginalMessageMultipart

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.updateOriginalMessageMultipart({
    webhookId: "<value>",
    webhookToken: "<value>",
    requestBody: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksUpdateOriginalMessageMultipart } from "discord-sdk/funcs/webhooksUpdateOriginalMessageMultipart.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksUpdateOriginalMessageMultipart(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateOriginalWebhookMessageMultipartRequest](../../models/operations/updateoriginalwebhookmessagemultipartrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateOriginalWebhookMessageMultipartSecurity](../../models/operations/updateoriginalwebhookmessagemultipartsecurity.md)                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageResponse](../../models/components/messageresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## getMessage

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.getMessage({
    webhookId: "<value>",
    webhookToken: "<value>",
    messageId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksGetMessage } from "discord-sdk/funcs/webhooksGetMessage.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksGetMessage(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    messageId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetWebhookMessageRequest](../../models/operations/getwebhookmessagerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetWebhookMessageSecurity](../../models/operations/getwebhookmessagesecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageResponse](../../models/components/messageresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## executeSlackWebhook

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.executeSlackWebhook({
    webhookId: "<value>",
    webhookToken: "<value>",
    slackWebhook: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksExecuteSlackWebhook } from "discord-sdk/funcs/webhooksExecuteSlackWebhook.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksExecuteSlackWebhook(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    slackWebhook: {},
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
| `request`                                                                                                                                                                      | [operations.ExecuteSlackCompatibleWebhookRequest](../../models/operations/executeslackcompatiblewebhookrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExecuteSlackCompatibleWebhookSecurity](../../models/operations/executeslackcompatiblewebhooksecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## getByToken

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.getByToken({
    webhookId: "<value>",
    webhookToken: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksGetByToken } from "discord-sdk/funcs/webhooksGetByToken.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksGetByToken(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetWebhookByTokenRequest](../../models/operations/getwebhookbytokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetWebhookByTokenSecurity](../../models/operations/getwebhookbytokensecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebhookByTokenResponseBody](../../models/operations/getwebhookbytokenresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## deleteByToken

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  await discord.webhooks.deleteByToken({
    webhookId: "<value>",
    webhookToken: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksDeleteByToken } from "discord-sdk/funcs/webhooksDeleteByToken.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksDeleteByToken(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteWebhookByTokenRequest](../../models/operations/deletewebhookbytokenrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteWebhookByTokenSecurity](../../models/operations/deletewebhookbytokensecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## updateByToken

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.webhooks.updateByToken({
    webhookId: "<value>",
    webhookToken: "<value>",
    requestBody: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksUpdateByToken } from "discord-sdk/funcs/webhooksUpdateByToken.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await webhooksUpdateByToken(discord, {
    webhookId: "<value>",
    webhookToken: "<value>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateWebhookByTokenRequest](../../models/operations/updatewebhookbytokenrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateWebhookByTokenSecurity](../../models/operations/updatewebhookbytokensecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateWebhookByTokenResponseBody](../../models/operations/updatewebhookbytokenresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## get

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.webhooks.get({
    webhookId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksGet } from "discord-sdk/funcs/webhooksGet.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await webhooksGet(discord, {
    webhookId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebhookResponseBody](../../models/operations/getwebhookresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

## delete

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  await discord.webhooks.delete({
    webhookId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksDelete } from "discord-sdk/funcs/webhooksDelete.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await webhooksDelete(discord, {
    webhookId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## update

### Example Usage

```typescript
import { Discord } from "discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.webhooks.update({
    webhookId: "<value>",
    requestBody: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "discord-sdk/core.js";
import { webhooksUpdate } from "discord-sdk/funcs/webhooksUpdate.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await webhooksUpdate(discord, {
    webhookId: "<value>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateWebhookResponseBody](../../models/operations/updatewebhookresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |