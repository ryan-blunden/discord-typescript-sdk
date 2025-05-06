# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  usageCount: 228104,
  creatorId: "<value>",
  createdAt: new Date("2023-12-05T19:50:01.234Z"),
  updatedAt: new Date("2023-01-05T02:15:33.066Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    systemChannelFlags: 699478,
    roles: [
      {
        id: 672160,
        name: "<value>",
        permissions: "<value>",
        color: 192696,
        hoist: false,
        mentionable: false,
      },
    ],
    channels: [
      {
        type: 14,
        bitrate: 781664,
        userLimit: 886207,
        nsfw: false,
        rateLimitPerUser: 473536,
        permissionOverwrites: [
          {
            id: "<value>",
            allow: "<value>",
            deny: "<value>",
          },
        ],
        template: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `usageCount`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creatorId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creator`                                                                                            | [components.UserResponse](../../models/components/userresponse.md)                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sourceGuildId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `serializedSourceGuild`                                                                              | [components.GuildTemplateSnapshotResponse](../../models/components/guildtemplatesnapshotresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isDirty`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |