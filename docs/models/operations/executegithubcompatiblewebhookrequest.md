# ExecuteGithubCompatibleWebhookRequest

## Example Usage

```typescript
import { ExecuteGithubCompatibleWebhookRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ExecuteGithubCompatibleWebhookRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  githubWebhook: {
    sender: {
      id: 285340,
      login: "Glenda41",
      htmlUrl: "https://drab-freight.com",
      avatarUrl: "https://nifty-fat.name/",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `webhookId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `webhookToken`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `wait`                                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `threadId`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `githubWebhook`                                                      | [components.GithubWebhook](../../models/components/githubwebhook.md) | :heavy_check_mark:                                                   | N/A                                                                  |