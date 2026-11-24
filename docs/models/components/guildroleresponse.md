# GuildRoleResponse

## Example Usage

```typescript
import { GuildRoleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildRoleResponse = {
  id: "<value>",
  name: "<value>",
  permissions: "<value>",
  position: 93768,
  color: 203650,
  colors: {
    primaryColor: 460839,
    secondaryColor: 709764,
    tertiaryColor: 813540,
  },
  hoist: true,
  managed: false,
  mentionable: false,
  icon: "<value>",
  unicodeEmoji: "<value>",
  flags: 68009,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `permissions`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `position`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `color`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `colors`                                                                                 | [components.GuildRoleColorsResponse](../../models/components/guildrolecolorsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hoist`                                                                                  | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `managed`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mentionable`                                                                            | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `icon`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `unicodeEmoji`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tags`                                                                                   | [components.GuildRoleTagsResponse](../../models/components/guildroletagsresponse.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `flags`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |