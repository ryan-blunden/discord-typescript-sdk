# InviteGuildRoleResponse

## Example Usage

```typescript
import { InviteGuildRoleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InviteGuildRoleResponse = {
  id: "<value>",
  name: "<value>",
  position: 235061,
  color: 963832,
  colors: {
    primaryColor: 460839,
    secondaryColor: 709764,
    tertiaryColor: 813540,
  },
  icon: "<value>",
  unicodeEmoji: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `position`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `color`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `colors`                                                                                 | [components.GuildRoleColorsResponse](../../models/components/guildrolecolorsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `icon`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `unicodeEmoji`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `permissions`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |