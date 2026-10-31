# MinimalContentMessageResponse

## Example Usage

```typescript
import { MinimalContentMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MinimalContentMessageResponse = {
  type: 6,
  content: "<value>",
  mentions: [],
  mentionRoles: [
    "<value 1>",
    "<value 2>",
  ],
  attachments: [],
  embeds: [],
  timestamp: new Date("2025-04-14T07:52:51.805Z"),
  editedTimestamp: new Date("2024-08-22T03:28:59.585Z"),
  flags: 975053,
  components: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [components.MessageType](../../models/components/messagetype.md)                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `mentions`                                                                                       | [components.UserResponse](../../models/components/userresponse.md)[]                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `mentionRoles`                                                                                   | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attachments`                                                                                    | [components.MessageAttachmentResponse](../../models/components/messageattachmentresponse.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `embeds`                                                                                         | [components.MessageEmbedResponse](../../models/components/messageembedresponse.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `timestamp`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `editedTimestamp`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `flags`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `components`                                                                                     | *components.MinimalContentMessageResponseComponents*[]                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `stickers`                                                                                       | *components.MinimalContentMessageResponseStickers*[]                                             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `stickerItems`                                                                                   | [components.MessageStickerItemResponse](../../models/components/messagestickeritemresponse.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |