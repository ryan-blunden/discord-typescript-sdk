# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  description: "underneath major proud lean cram",
  usageCount: 446489,
  creatorId: "<value>",
  creator: {
    id: "<value>",
    username: "Carlotta.Gerlach",
    avatar: "https://picsum.photos/seed/x319wWT/3864/2978",
    discriminator: "<value>",
    publicFlags: 308198,
    flags: 949414,
    globalName: "<value>",
    primaryGuild: {
      identityGuildId: "<value>",
      identityEnabled: false,
      tag: "<value>",
      badge: "<value>",
    },
  },
  createdAt: new Date("2026-03-02T07:01:25.374Z"),
  updatedAt: new Date("2024-11-08T06:34:50.537Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    description: "times boiling beside if evenly when",
    region: "<value>",
    verificationLevel: 2,
    defaultMessageNotifications: 0,
    explicitContentFilter: 2,
    preferredLocale: "pl",
    afkChannelId: "<value>",
    afkTimeout: 1800,
    systemChannelId: "<value>",
    systemChannelFlags: 703726,
    roles: [],
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
  },
  isDirty: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `usageCount`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creatorId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creator`                                                                                            | [components.UserResponse](../../models/components/userresponse.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sourceGuildId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `serializedSourceGuild`                                                                              | [components.GuildTemplateSnapshotResponse](../../models/components/guildtemplatesnapshotresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isDirty`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |