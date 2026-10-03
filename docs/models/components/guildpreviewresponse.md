# GuildPreviewResponse

## Example Usage

```typescript
import { GuildPreviewResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildPreviewResponse = {
  id: "<value>",
  name: "<value>",
  icon: "<value>",
  description: "lest yahoo ah complication next whether while for",
  homeHeader: "<value>",
  splash: "<value>",
  discoverySplash: "<value>",
  features: [],
  approximateMemberCount: 232695,
  approximatePresenceCount: 138596,
  emojis: [
    {
      id: "<value>",
      name: "<value>",
      roles: [
        "<value 1>",
        "<value 2>",
      ],
      requireColons: true,
      managed: true,
      animated: true,
      available: false,
    },
  ],
  stickers: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `homeHeader`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `splash`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `discoverySplash`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `features`                                                                           | [components.GuildFeatures](../../models/components/guildfeatures.md)[]               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `approximateMemberCount`                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `approximatePresenceCount`                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emojis`                                                                             | [components.EmojiResponse](../../models/components/emojiresponse.md)[]               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `stickers`                                                                           | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |