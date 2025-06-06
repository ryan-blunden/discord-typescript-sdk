# UpdateWebhookMessageFormRequest

## Example Usage

```typescript
import { UpdateWebhookMessageFormRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateWebhookMessageFormRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `webhookId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `webhookToken`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `messageId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `threadId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `withComponents`                                                                                                 | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `incomingWebhookUpdateRequestPartial`                                                                            | [components.IncomingWebhookUpdateRequestPartial](../../models/components/incomingwebhookupdaterequestpartial.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |