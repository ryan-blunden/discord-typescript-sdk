# GuildTemplateResponse

## Example Usage

```typescript
import { GuildTemplateResponse } from "@ryan.blunden/discord/models/components";

let value: GuildTemplateResponse = {
  code: "<value>",
  name: "<value>",
  usageCount: 145937,
  creatorId: "<value>",
  createdAt: new Date("2023-10-30T01:36:34.812Z"),
  updatedAt: new Date("2025-05-25T15:41:11.321Z"),
  sourceGuildId: "<value>",
  serializedSourceGuild: {
    name: "<value>",
    systemChannelFlags: 255108,
    roles: [
      {
        id: 609429,
        name: "<value>",
        permissions: "<value>",
        color: 78381,
        hoist: false,
        mentionable: false,
      },
    ],
    channels: [
      {
        bitrate: 202145,
        userLimit: 619143,
        nsfw: false,
        rateLimitPerUser: 98138,
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