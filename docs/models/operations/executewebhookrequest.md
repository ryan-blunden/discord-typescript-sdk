# ExecuteWebhookRequest

## Example Usage

```typescript
import { ExecuteWebhookRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ExecuteWebhookRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `webhookId`                                           | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `webhookToken`                                        | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `wait`                                                | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `threadId`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `withComponents`                                      | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `requestBody`                                         | *operations.ExecuteWebhookWebhooksRequestRequestBody* | :heavy_check_mark:                                    | N/A                                                   |