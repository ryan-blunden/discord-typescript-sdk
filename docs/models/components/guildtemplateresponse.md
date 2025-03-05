# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  usageCount: 587748,
  creatorId: "<value>",
  createdAt: new Date("2024-08-18T02:42:35.950Z"),
  updatedAt: new Date("2023-01-18T05:08:23.248Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    systemChannelFlags: 103068,
    roles: [
      {
        id: 836395,
        name: "<value>",
        permissions: "<value>",
        color: 452638,
        hoist: false,
        mentionable: false,
      },
    ],
    channels: [
      {
        bitrate: 124387,
        userLimit: 155920,
        nsfw: false,
        rateLimitPerUser: 611423,
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