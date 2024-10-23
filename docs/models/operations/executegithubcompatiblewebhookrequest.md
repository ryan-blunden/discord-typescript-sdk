# ExecuteGithubCompatibleWebhookRequest

## Example Usage

```typescript
import { ExecuteGithubCompatibleWebhookRequest } from "discord-sdk/models/operations";

let value: ExecuteGithubCompatibleWebhookRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  githubWebhook: {
    sender: {
      id: 31305,
      login: "Mossie35",
      htmlUrl: "https://actual-bug.biz/",
      avatarUrl: "https://hefty-shipper.biz/",
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