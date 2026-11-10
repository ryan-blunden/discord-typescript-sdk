# CreateGuildTemplateResponse

## Example Usage

```typescript
import { CreateGuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildTemplateResponse = {
  headers: {},
  result: {
    code: "<value>",
    name: "<value>",
    description: null,
    usageCount: 865343,
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
    createdAt: new Date("2025-08-09T08:11:16.975Z"),
    updatedAt: new Date("2025-05-19T04:14:09.423Z"),
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
    isDirty: true,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GuildTemplateResponse](../../models/components/guildtemplateresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |