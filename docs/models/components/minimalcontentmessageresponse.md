# MinimalContentMessageResponse

## Example Usage

```typescript
import { MinimalContentMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MinimalContentMessageResponse = {
  content: "<value>",
  mentions: [
    {
      id: "<value>",
      username: "Christop.Prosacco",
      discriminator: "<value>",
      publicFlags: 407811,
      flags: 213636,
    },
  ],
  mentionRoles: [
    "<value>",
  ],
  attachments: [
    {
      id: "<value>",
      filename: "example.file",
      size: 975053,
      url: "https://well-documented-seafood.name/",
      proxyUrl: "https://colorless-coliseum.biz/",
    },
  ],
  embeds: [
    {
      type: "<value>",
    },
  ],
  timestamp: new Date("2024-11-02T02:20:05.902Z"),
  flags: 624013,
  components: [
    {
      id: 525257,
      file: {
        id: "<value>",
        url: "https://unrealistic-bran.net/",
        proxyUrl: "https://haunting-chapel.com",
      },
      spoiler: false,
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