# MinimalContentMessageResponse

## Example Usage

```typescript
import { MinimalContentMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MinimalContentMessageResponse = {
  content: "<value>",
  mentions: [
    {
      id: "<value>",
      username: "Austyn_Koss-Wolff73",
      discriminator: "<value>",
      publicFlags: 282807,
      flags: 120196,
    },
  ],
  mentionRoles: [
    "<value>",
  ],
  attachments: [
    {
      id: "<value>",
      filename: "example.file",
      size: 296140,
      url: "https://glaring-hawk.com/",
      proxyUrl: "https://obvious-doing.name",
    },
  ],
  embeds: [
    {
      type: "<value>",
    },
  ],
  timestamp: new Date("2023-04-13T23:00:40.302Z"),
  flags: 575947,
  components: [
    {
      id: 929297,
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
| `components`                                                                                     | [components.ActionRowComponentResponse](../../models/components/actionrowcomponentresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `resolved`                                                                                       | [components.ResolvedObjectsResponse](../../models/components/resolvedobjectsresponse.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `stickers`                                                                                       | *components.MinimalContentMessageResponseStickers*[]                                             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `stickerItems`                                                                                   | [components.MessageStickerItemResponse](../../models/components/messagestickeritemresponse.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |