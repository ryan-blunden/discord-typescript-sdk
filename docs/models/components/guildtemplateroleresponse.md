# GuildTemplateRoleResponse

## Example Usage

```typescript
import { GuildTemplateRoleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateRoleResponse = {
  id: 206752,
  name: "<value>",
  permissions: "<value>",
  color: 913066,
  colors: {
    primaryColor: 7228,
    secondaryColor: 286855,
    tertiaryColor: 827272,
  },
  hoist: true,
  mentionable: false,
  icon: "<value>",
  unicodeEmoji: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `permissions`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `color`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `colors`                                                                                                 | [components.GuildTemplateRoleColorsResponse](../../models/components/guildtemplaterolecolorsresponse.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hoist`                                                                                                  | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `mentionable`                                                                                            | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `icon`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `unicodeEmoji`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |