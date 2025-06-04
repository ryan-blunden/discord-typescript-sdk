# GuildPreviewResponse

## Example Usage

```typescript
import { GuildPreviewResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildPreviewResponse = {
  id: "<value>",
  name: "<value>",
  features: [
    "<value 1>",
  ],
  approximateMemberCount: 692705,
  approximatePresenceCount: 627503,
  emojis: [],
  stickers: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `homeHeader`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `splash`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `discoverySplash`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `features`                                                                           | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `approximateMemberCount`                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `approximatePresenceCount`                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emojis`                                                                             | [components.EmojiResponse](../../models/components/emojiresponse.md)[]               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `stickers`                                                                           | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |