# GuildWithCountsResponse

## Example Usage

```typescript
import { GuildWithCountsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildWithCountsResponse = {
  id: "<value>",
  name: "<value>",
  features: [],
  ownerId: "<value>",
  region: "<value>",
  systemChannelFlags: 243269,
  widgetEnabled: true,
  roles: [
    {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 592634,
      color: 9002,
      hoist: false,
      managed: true,
      mentionable: true,
    },
  ],
  premiumSubscriptionCount: 7257,
  premiumProgressBarEnabled: false,
  nsfw: false,
  emojis: [],
  stickers: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `homeHeader`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `splash`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `discoverySplash`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `features`                                                                           | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `banner`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ownerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `applicationId`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `region`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `afkChannelId`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `afkTimeout`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `systemChannelId`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `systemChannelFlags`                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `widgetEnabled`                                                                      | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `widgetChannelId`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `verificationLevel`                                                                  | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `roles`                                                                              | [components.GuildRoleResponse](../../models/components/guildroleresponse.md)[]       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `defaultMessageNotifications`                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mfaLevel`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `explicitContentFilter`                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `maxPresences`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `maxMembers`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `maxStageVideoChannelUsers`                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `maxVideoChannelUsers`                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `vanityUrlCode`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `premiumTier`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `premiumSubscriptionCount`                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `preferredLocale`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `rulesChannelId`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `safetyAlertsChannelId`                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `publicUpdatesChannelId`                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `premiumProgressBarEnabled`                                                          | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nsfw`                                                                               | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nsfwLevel`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emojis`                                                                             | [components.EmojiResponse](../../models/components/emojiresponse.md)[]               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `stickers`                                                                           | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `approximateMemberCount`                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `approximatePresenceCount`                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |