# InviteGuildResponse

## Example Usage

```typescript
import { InviteGuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InviteGuildResponse = {
  id: "<value>",
  name: "<value>",
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
| `splash`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `banner`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `description`              | *string*                   | :heavy_minus_sign:         | N/A                        |
| `icon`                     | *string*                   | :heavy_minus_sign:         | N/A                        |
| `features`                 | *string*[]                 | :heavy_check_mark:         | N/A                        |
| `verificationLevel`        | *number*                   | :heavy_minus_sign:         | N/A                        |
| `vanityUrlCode`            | *string*                   | :heavy_minus_sign:         | N/A                        |
| `nsfwLevel`                | *number*                   | :heavy_minus_sign:         | N/A                        |
| `nsfw`                     | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `premiumSubscriptionCount` | *number*                   | :heavy_minus_sign:         | N/A                        |