# GuildStickerResponse

## Example Usage

```typescript
import { GuildStickerResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildStickerResponse = {
  id: "<value>",
  name: "<value>",
  tags: "<value>",
  available: false,
  guildId: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `tags`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `formatType`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `available`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `guildId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |