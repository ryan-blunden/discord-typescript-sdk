# InviteGuildResponse

## Example Usage

```typescript
import { InviteGuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InviteGuildResponse = {
  id: "<value>",
  name: "<value>",
  splash: "<value>",
  banner: "<value>",
  description: "glider downchange treble",
  icon: "<value>",
  features: [
    "TICKETED_EVENTS_ENABLED",
  ],
  verificationLevel: 1,
  vanityUrlCode: "<value>",
  nsfwLevel: 1,
  nsfw: true,
  premiumSubscriptionCount: 467605,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `splash`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `banner`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `features`                                                                           | [components.GuildFeatures](../../models/components/guildfeatures.md)[]               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `verificationLevel`                                                                  | [components.VerificationLevels](../../models/components/verificationlevels.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `vanityUrlCode`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nsfwLevel`                                                                          | [components.GuildNSFWContentLevel](../../models/components/guildnsfwcontentlevel.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nsfw`                                                                               | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `premiumSubscriptionCount`                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |