# GetMyGuildMemberResponse

## Example Usage

```typescript
import { GetMyGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetMyGuildMemberResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    flags: 656684,
    joinedAt: new Date("2024-12-12T12:18:35.651Z"),
    pending: false,
    roles: [],
    user: {
      id: "<value>",
      username: "Jeffery46",
      discriminator: "<value>",
      publicFlags: 573721,
      flags: 285972,
    },
    mute: true,
    deaf: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.PrivateGuildMemberResponse](../../models/components/privateguildmemberresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |