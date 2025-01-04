# MinimalContentMessageResponse

## Example Usage

```typescript
import { MinimalContentMessageResponse } from "@ryan.blunden/discord/models/components";

let value: MinimalContentMessageResponse = {
  content: "<value>",
  mentions: [
    {
      id: "<value>",
      username: "Neha.Mertz",
      discriminator: "<value>",
      publicFlags: 239427,
      flags: 408427,
    },
  ],
  mentionRoles: [
    "<value>",
  ],
  attachments: [
    {
      id: "<value>",
      filename: "example.file",
      size: 721093,
      url: "https://untimely-character.org",
      proxyUrl: "https://incomparable-injunction.net",
    },
  ],
  embeds: [
    {
      type: "<value>",
    },
  ],
  timestamp: new Date("2025-07-14T20:57:49.279Z"),
  flags: 657897,
  components: [
    {
      id: 808464,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `mentions`                                                                                       | [components.UserResponse](../../models/components/userresponse.md)[]                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `mentionRoles`                                                                                   | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attachments`                                                                                    | [components.MessageAttachmentResponse](../../models/components/messageattachmentresponse.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `embeds`                                                                                         | [components.MessageEmbedResponse](../../models/components/messageembedresponse.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `timestamp`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `editedTimestamp`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `flags`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `components`                                                                                     | *components.MinimalContentMessageResponseComponents*[]                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `resolved`                                                                                       | [components.ResolvedObjectsResponse](../../models/components/resolvedobjectsresponse.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `stickers`                                                                                       | *components.MinimalContentMessageResponseStickers*[]                                             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `stickerItems`                                                                                   | [components.MessageStickerItemResponse](../../models/components/messagestickeritemresponse.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |