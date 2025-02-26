# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResolvedObjectsResponse = {
  users: {
    "key": {
      id: "<value>",
      username: "Zoila.Stroman61",
      discriminator: "<value>",
      publicFlags: 848009,
      flags: 807319,
    },
  },
  members: {
    "key": {
      flags: 569101,
      joinedAt: new Date("2024-03-22T06:32:58.021Z"),
      pending: false,
      roles: [
        "<value>",
      ],
      user: {
        id: "<value>",
        username: "Annie86",
        discriminator: "<value>",
        publicFlags: 855804,
        flags: 11714,
      },
      mute: false,
      deaf: false,
    },
  },
  channels: {
    "key": {
      id: "<value>",
      flags: 729991,
      recipients: [
        {
          id: "<value>",
          username: "Celestine1",
          discriminator: "<value>",
          publicFlags: 223924,
          flags: 345352,
        },
      ],
    },
  },
  roles: {
    "key": {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 928082,
      color: 704415,
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