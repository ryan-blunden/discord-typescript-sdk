# MyGuildResponse

## Example Usage

```typescript
import { MyGuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MyGuildResponse = {
  id: "<value>",
  name: "<value>",
  owner: false,
  permissions: "<value>",
  features: [
    "<value>",
  ],
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `id`                       | *string*                   | :heavy_check_mark:         | N/A                        |
| `name`                     | *string*                   | :heavy_check_mark:         | N/A                        |
| `icon`                     | *string*                   | :heavy_minus_sign:         | N/A                        |
| `banner`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `owner`                    | *boolean*                  | :heavy_check_mark:         | N/A                        |
| `permissions`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `features`                 | *string*[]                 | :heavy_check_mark:         | N/A                        |
| `approximateMemberCount`   | *number*                   | :heavy_minus_sign:         | N/A                        |
| `approximatePresenceCount` | *number*                   | :heavy_minus_sign:         | N/A                        |