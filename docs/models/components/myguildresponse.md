# MyGuildResponse

## Example Usage

```typescript
import { MyGuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MyGuildResponse = {
  id: "<value>",
  name: "<value>",
  icon: "<value>",
  banner: "<value>",
  owner: true,
  permissions: "<value>",
  features: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `icon`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `banner`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `owner`                                                                | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `permissions`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `features`                                                             | [components.GuildFeatures](../../models/components/guildfeatures.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `approximateMemberCount`                                               | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `approximatePresenceCount`                                             | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |