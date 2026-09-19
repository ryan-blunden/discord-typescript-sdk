# GuildTemplateSnapshotResponse

## Example Usage

```typescript
import { GuildTemplateSnapshotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateSnapshotResponse = {
  name: "<value>",
  description: "that given yowza propound mmm around mmm dreamily",
  region: "<value>",
  verificationLevel: 3,
  defaultMessageNotifications: 0,
  explicitContentFilter: 0,
  preferredLocale: "he",
  afkChannelId: "<value>",
  afkTimeout: 3600,
  systemChannelId: "<value>",
  systemChannelFlags: 787448,
  roles: [
    {
      id: 427892,
      name: "<value>",
      permissions: "<value>",
      color: 451217,
      colors: {
        primaryColor: 7228,
        secondaryColor: 286855,
        tertiaryColor: 827272,
      },
      hoist: false,
      mentionable: true,
      icon: "<value>",
      unicodeEmoji: "<value>",
    },
  ],
  channels: [
    {
      id: 19725,
      type: 0,
      name: "<value>",
      position: 528554,
      topic: "<value>",
      bitrate: 607776,
      userLimit: 40178,
      nsfw: false,
      rateLimitPerUser: 960726,
      parentId: "<value>",
      defaultAutoArchiveDuration: 10080,
      permissionOverwrites: [
        {
          id: "<value>",
          type: 1,
          allow: "<value>",
          deny: "<value>",
        },
      ],
      availableTags: [
        {
          id: 800252,
          name: "<value>",
          emojiId: "<value>",
          emojiName: "<value>",
          moderated: false,
        },
      ],
      template: "<value>",
      defaultReactionEmoji: {
        emojiId: null,
        emojiName: "<value>",
      },
      defaultThreadRateLimitPerUser: null,
      defaultSortOrder: 1,
      defaultForumLayout: null,
      defaultTagSetting: "match_all",
      themeColor: 463112,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `region`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `verificationLevel`                                                                                      | [components.VerificationLevels](../../models/components/verificationlevels.md)                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `defaultMessageNotifications`                                                                            | [components.UserNotificationSettings](../../models/components/usernotificationsettings.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `explicitContentFilter`                                                                                  | [components.GuildExplicitContentFilterTypes](../../models/components/guildexplicitcontentfiltertypes.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `preferredLocale`                                                                                        | [components.AvailableLocalesEnum](../../models/components/availablelocalesenum.md)                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `afkChannelId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `afkTimeout`                                                                                             | [components.AfkTimeouts](../../models/components/afktimeouts.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `systemChannelId`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `systemChannelFlags`                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `roles`                                                                                                  | [components.GuildTemplateRoleResponse](../../models/components/guildtemplateroleresponse.md)[]           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `channels`                                                                                               | [components.GuildTemplateChannelResponse](../../models/components/guildtemplatechannelresponse.md)[]     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |