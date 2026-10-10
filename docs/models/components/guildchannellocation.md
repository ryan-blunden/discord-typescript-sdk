# GuildChannelLocation

## Example Usage

```typescript
import { GuildChannelLocation } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildChannelLocation = {
  id: "<id>",
  kind: "party",
  channelId: "<value>",
  guildId: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `kind`                                             | [components.Kind](../../models/components/kind.md) | :heavy_check_mark:                                 | N/A                                                |
| `channelId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `guildId`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |