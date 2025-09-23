# AddGuildMemberResponse

## Example Usage

```typescript
import { AddGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: AddGuildMemberResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    flags: 668178,
    joinedAt: new Date("2023-01-02T03:50:39.428Z"),
    pending: true,
    roles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    user: {
      id: "<value>",
      username: "Jeffery46",
      discriminator: "<value>",
      publicFlags: 573721,
      flags: 285972,
    },
    mute: false,
    deaf: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |