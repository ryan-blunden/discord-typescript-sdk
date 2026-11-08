# ExecuteSlackCompatibleWebhookRequest

## Example Usage

```typescript
import { ExecuteSlackCompatibleWebhookRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ExecuteSlackCompatibleWebhookRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  slackWebhook: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `webhookId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `webhookToken`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `wait`                                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `threadId`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `slackWebhook`                                                     | [components.SlackWebhook](../../models/components/slackwebhook.md) | :heavy_check_mark:                                                 | N/A                                                                |