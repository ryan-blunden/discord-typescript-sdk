# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResolvedObjectsResponse = {
  users: {
    "key": {
      id: "<value>",
      username: "Kitty.Koelpin",
      discriminator: "<value>",
      publicFlags: 730863,
      flags: 840734,
    },
  },
  members: {
    "key": {
      flags: 11332,
      joinedAt: new Date("2023-06-27T07:37:02.234Z"),
      pending: false,
      roles: [
        "<value>",
      ],
      user: {
        id: "<value>",
        username: "Dolly_OReilly54",
        discriminator: "<value>",
        publicFlags: 751286,
        flags: 521333,
      },
      mute: false,
      deaf: false,
    },
  },
  channels: {
    "key": {
      id: "<value>",
      type: 12,
      flags: 419351,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 319002,
      memberCount: 282079,
      totalMessageSent: 690987,
    },
  },
  roles: {
    "key": {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 971878,
      color: 285819,
      hoist: false,
      managed: false,
      mentionable: false,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `users`                                                                                          | Record<string, [components.UserResponse](../../models/components/userresponse.md)>               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `members`                                                                                        | Record<string, [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `channels`                                                                                       | Record<string, *components.Channels*>                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `roles`                                                                                          | Record<string, [components.GuildRoleResponse](../../models/components/guildroleresponse.md)>     | :heavy_check_mark:                                                                               | N/A                                                                                              |