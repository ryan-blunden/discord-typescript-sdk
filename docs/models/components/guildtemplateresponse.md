# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "discord-sdk/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  usageCount: 838206,
  creatorId: "<value>",
  createdAt: new Date("2023-05-10T18:53:50.566Z"),
  updatedAt: new Date("2023-01-17T19:57:19.728Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    systemChannelFlags: 587817,
    roles: [
      {
        id: 404676,
        name: "<value>",
        permissions: "<value>",
        color: 329503,
        hoist: false,
        mentionable: false,
      },
    ],
    channels: [
      {
        type: 0,
        bitrate: 313045,
        userLimit: 924162,
        nsfw: false,
        rateLimitPerUser: 959673,
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