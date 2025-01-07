# GuildTemplateSnapshotResponse

## Example Usage

```typescript
import { GuildTemplateSnapshotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateSnapshotResponse = {
  name: "<value>",
  systemChannelFlags: 715543,
  roles: [
    {
      id: 449100,
      name: "<value>",
      permissions: "<value>",
      color: 279575,
      hoist: false,
      mentionable: false,
    },
  ],
  channels: [
    {
      bitrate: 873901,
      userLimit: 673158,
      nsfw: false,
      rateLimitPerUser: 64184,
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `region`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `verificationLevel`                                                                                  | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `defaultMessageNotifications`                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `explicitContentFilter`                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `preferredLocale`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `afkChannelId`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `afkTimeout`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `systemChannelId`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `systemChannelFlags`                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roles`                                                                                              | [components.GuildTemplateRoleResponse](../../models/components/guildtemplateroleresponse.md)[]       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `channels`                                                                                           | [components.GuildTemplateChannelResponse](../../models/components/guildtemplatechannelresponse.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |