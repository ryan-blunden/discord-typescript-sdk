# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  usageCount: 448405,
  creatorId: "<value>",
  createdAt: new Date("2025-07-27T08:56:13.386Z"),
  updatedAt: new Date("2023-10-23T06:03:23.045Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    systemChannelFlags: 615932,
    roles: [
      {
        id: 845771,
        name: "<value>",
        permissions: "<value>",
        color: 807151,
        hoist: false,
        mentionable: false,
      },
    ],
    channels: [
      {
        bitrate: 238723,
        userLimit: 51089,
        nsfw: false,
        rateLimitPerUser: 276828,
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