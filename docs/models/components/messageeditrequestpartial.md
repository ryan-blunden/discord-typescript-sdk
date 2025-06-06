# MessageEditRequestPartial

## Example Usage

```typescript
import { MessageEditRequestPartial } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageEditRequestPartial = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `content`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `embeds`                                                                                             | [components.RichEmbed](../../models/components/richembed.md)[]                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `flags`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `allowedMentions`                                                                                    | [components.MessageAllowedMentionsRequest](../../models/components/messageallowedmentionsrequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `stickerIds`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `components`                                                                                         | *components.MessageEditRequestPartialComponents*[]                                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `attachments`                                                                                        | [components.MessageAttachmentRequest](../../models/components/messageattachmentrequest.md)[]         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |