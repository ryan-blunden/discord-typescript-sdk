# GuildStickerResponse

## Example Usage

```typescript
import { GuildStickerResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildStickerResponse = {
  id: "<value>",
  name: "<value>",
  tags: "<value>",
  type: 2,
  formatType: 2,
  description: "deeply till afore and off unkempt um suspension",
  available: true,
  guildId: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tags`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.GuildStickerResponseType](../../models/components/guildstickerresponsetype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `formatType`                                                                               | [components.StickerFormatTypes](../../models/components/stickerformattypes.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `available`                                                                                | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `guildId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `user`                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                         | :heavy_minus_sign:                                                                         | N/A                                                                                        |