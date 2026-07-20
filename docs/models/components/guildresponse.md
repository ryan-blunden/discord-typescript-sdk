# GuildResponse

## Example Usage

```typescript
import { GuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildResponse = {
  id: "<value>",
  name: "<value>",
  icon: "<value>",
  description: null,
  homeHeader: "<value>",
  splash: "<value>",
  discoverySplash: "<value>",
  features: [],
  banner: "<value>",
  ownerId: "<value>",
  applicationId: null,
  region: "<value>",
  afkChannelId: "<value>",
  afkTimeout: 3600,
  systemChannelId: "<value>",
  systemChannelFlags: 943826,
  widgetEnabled: false,
  widgetChannelId: "<value>",
  verificationLevel: 2,
  roles: [],
  defaultMessageNotifications: 1,
  mfaLevel: 0,
  explicitContentFilter: 0,
  maxPresences: 327799,
  maxMembers: 326307,
  maxStageVideoChannelUsers: 819027,
  maxVideoChannelUsers: 108737,
  vanityUrlCode: "<value>",
  premiumTier: 0,
  premiumSubscriptionCount: 991393,
  preferredLocale: "sv-SE",
  rulesChannelId: null,
  safetyAlertsChannelId: "<value>",
  publicUpdatesChannelId: "<value>",
  premiumProgressBarEnabled: true,
  nsfw: false,
  nsfwLevel: 2,
  emojis: [],
  stickers: [
    {
      id: "<value>",
      name: "<value>",
      tags: "<value>",
      type: 2,
      formatType: 4,
      description:
        "mindless though supposing vainly fortunately wholly eyebrow while yippee",
      available: true,
      guildId: "<value>",
    },
  ],
  incidentsData: {
    invitesDisabledUntil: new Date("2026-06-04T08:40:38.832Z"),
    dmsDisabledUntil: new Date("2026-09-21T13:19:40.395Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `icon`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `homeHeader`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `splash`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `discoverySplash`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `features`                                                                                               | [components.GuildFeatures](../../models/components/guildfeatures.md)[]                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `banner`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `applicationId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `region`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `afkChannelId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `afkTimeout`                                                                                             | [components.AfkTimeouts](../../models/components/afktimeouts.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `systemChannelId`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `systemChannelFlags`                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `widgetEnabled`                                                                                          | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `widgetChannelId`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `verificationLevel`                                                                                      | [components.VerificationLevels](../../models/components/verificationlevels.md)                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `roles`                                                                                                  | [components.GuildRoleResponse](../../models/components/guildroleresponse.md)[]                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `defaultMessageNotifications`                                                                            | [components.UserNotificationSettings](../../models/components/usernotificationsettings.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `mfaLevel`                                                                                               | [components.GuildMFALevel](../../models/components/guildmfalevel.md)                                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `explicitContentFilter`                                                                                  | [components.GuildExplicitContentFilterTypes](../../models/components/guildexplicitcontentfiltertypes.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxPresences`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxMembers`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxStageVideoChannelUsers`                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxVideoChannelUsers`                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `vanityUrlCode`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `premiumTier`                                                                                            | [components.PremiumGuildTiers](../../models/components/premiumguildtiers.md)                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `premiumSubscriptionCount`                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `preferredLocale`                                                                                        | [components.AvailableLocalesEnum](../../models/components/availablelocalesenum.md)                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `rulesChannelId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `safetyAlertsChannelId`                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `publicUpdatesChannelId`                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `premiumProgressBarEnabled`                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `premiumProgressBarEnabledUserUpdatedAt`                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `nsfw`                                                                                                   | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `nsfwLevel`                                                                                              | [components.GuildNSFWContentLevel](../../models/components/guildnsfwcontentlevel.md)                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `emojis`                                                                                                 | [components.EmojiResponse](../../models/components/emojiresponse.md)[]                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `stickers`                                                                                               | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md)[]                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `incidentsData`                                                                                          | [components.GuildIncidentsDataResponse](../../models/components/guildincidentsdataresponse.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |