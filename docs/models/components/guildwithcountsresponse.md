# GuildWithCountsResponse

## Example Usage

```typescript
import { GuildWithCountsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildWithCountsResponse = {
  id: "<value>",
  name: "<value>",
  icon: null,
  description: "accidentally until acquaintance simplistic woot now",
  homeHeader: "<value>",
  splash: "<value>",
  discoverySplash: "<value>",
  features: [
    "PREVIEW_ENABLED",
  ],
  banner: "<value>",
  ownerId: "<value>",
  applicationId: "<value>",
  region: "<value>",
  afkChannelId: "<value>",
  afkTimeout: 3600,
  systemChannelId: null,
  systemChannelFlags: 130259,
  widgetEnabled: true,
  widgetChannelId: "<value>",
  verificationLevel: 0,
  roles: [
    {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 943836,
      color: 282018,
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
      flags: 736917,
    },
  ],
  defaultMessageNotifications: 1,
  mfaLevel: 0,
  explicitContentFilter: 2,
  maxPresences: 972739,
  maxMembers: 343647,
  maxStageVideoChannelUsers: 732260,
  maxVideoChannelUsers: 979555,
  vanityUrlCode: "<value>",
  premiumTier: 3,
  premiumSubscriptionCount: 911991,
  preferredLocale: "fi",
  rulesChannelId: "<value>",
  safetyAlertsChannelId: "<value>",
  publicUpdatesChannelId: "<value>",
  premiumProgressBarEnabled: false,
  nsfw: false,
  nsfwLevel: 1,
  emojis: [],
  stickers: [],
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
| `approximateMemberCount`                                                                                 | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `approximatePresenceCount`                                                                               | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |