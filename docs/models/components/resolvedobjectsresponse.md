# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResolvedObjectsResponse = {
  users: {
    "key": {
      id: "<value>",
      username: "Henry.Aufderhar66",
      discriminator: "<value>",
      publicFlags: 618016,
      flags: 428769,
    },
  },
  members: {
    "key": {
      flags: 135474,
      joinedAt: new Date("2023-11-23T22:01:05.887Z"),
      pending: false,
      roles: [
        "<value>",
      ],
      user: {
        id: "<value>",
        username: "Kevon_Marvin",
        discriminator: "<value>",
        publicFlags: 896547,
        flags: 367562,
      },
      mute: false,
      deaf: false,
    },
  },
  channels: {
    "key": {
      id: "<value>",
      flags: 891924,
      recipients: [
        {
          id: "<value>",
          username: "Rachel71",
          discriminator: "<value>",
          publicFlags: 149448,
          flags: 868126,
        },
      ],
    },
  },
  roles: {
    "key": {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 162493,
      color: 615560,
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