# ListMessageReactionsByEmojiRequest

## Example Usage

```typescript
import { ListMessageReactionsByEmojiRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMessageReactionsByEmojiRequest = {
  channelId: "<value>",
  messageId: "<value>",
  emojiName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `messageId`        | *string*           | :heavy_check_mark: | N/A                |
| `emojiName`        | *string*           | :heavy_check_mark: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `type`             | *number*           | :heavy_minus_sign: | N/A                |