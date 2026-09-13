# UpdateOriginalWebhookMessageJsonRequest

## Example Usage

```typescript
import { UpdateOriginalWebhookMessageJsonRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateOriginalWebhookMessageJsonRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  incomingWebhookUpdateRequestPartial: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `webhookId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `webhookToken`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `threadId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `withComponents`                                                                                                 | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `incomingWebhookUpdateRequestPartial`                                                                            | [components.IncomingWebhookUpdateRequestPartial](../../models/components/incomingwebhookupdaterequestpartial.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |