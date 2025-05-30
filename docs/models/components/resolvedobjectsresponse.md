# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResolvedObjectsResponse = {
  users: {
    "key": {
      id: "<value>",
      username: "Eudora_Sipes43",
      discriminator: "<value>",
      publicFlags: 778761,
      flags: 416268,
    },
  },
  members: {
    "key": {
      flags: 5404,
      joinedAt: new Date("2024-05-05T18:02:05.430Z"),
      pending: false,
      roles: [
        "<value>",
      ],
      user: {
        id: "<value>",
        username: "Simeon50",
        discriminator: "<value>",
        publicFlags: 483308,
        flags: 600547,
      },
      mute: false,
      deaf: false,
    },
  },
  channels: {
    "key": {
      id: "<value>",
      type: 7,
      flags: 352317,
      recipients: [
        {
          id: "<value>",
          username: "Orville.Windler",
          discriminator: "<value>",
          publicFlags: 136423,
          flags: 162030,
        },
      ],
    },
  },
  roles: {
    "key": {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 996856,
      color: 288975,
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