# UpdateWebhookMessageMultipartRequest

## Example Usage

```typescript
import { UpdateWebhookMessageMultipartRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateWebhookMessageMultipartRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `webhookId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `webhookToken`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `messageId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `threadId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `withComponents`                                                                                                           | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `requestBody`                                                                                                              | [operations.UpdateWebhookMessageMultipartRequestBody](../../models/operations/updatewebhookmessagemultipartrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |