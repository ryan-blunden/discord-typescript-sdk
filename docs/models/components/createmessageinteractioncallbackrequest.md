# CreateMessageInteractionCallbackRequest

## Example Usage

```typescript
import { CreateMessageInteractionCallbackRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: CreateMessageInteractionCallbackRequest = {
  type: 6,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [components.CreateMessageInteractionCallbackRequestType](../../models/components/createmessageinteractioncallbackrequesttype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `data`                                                                                                                           | [components.IncomingWebhookInteractionRequest](../../models/components/incomingwebhookinteractionrequest.md)                     | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |