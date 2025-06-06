# IncomingWebhookUpdateRequestPartial

## Example Usage

```typescript
import { IncomingWebhookUpdateRequestPartial } from "@ryan.blunden/discord-sdk/models/components";

let value: IncomingWebhookUpdateRequestPartial = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `content`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `embeds`                                                                                             | [components.RichEmbed](../../models/components/richembed.md)[]                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `allowedMentions`                                                                                    | [components.MessageAllowedMentionsRequest](../../models/components/messageallowedmentionsrequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `components`                                                                                         | *components.IncomingWebhookUpdateRequestPartialComponents*[]                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `attachments`                                                                                        | [components.MessageAttachmentRequest](../../models/components/messageattachmentrequest.md)[]         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `poll`                                                                                               | [components.PollCreateRequest](../../models/components/pollcreaterequest.md)                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `flags`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |