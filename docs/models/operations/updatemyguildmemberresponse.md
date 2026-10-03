# UpdateMyGuildMemberResponse

## Example Usage

```typescript
import { UpdateMyGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMyGuildMemberResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    avatar: "https://loremflickr.com/2597/3457?lock=1672985208501715",
    banner: "<value>",
    communicationDisabledUntil: new Date("2026-01-20T08:11:26.912Z"),
    flags: 770861,
    joinedAt: new Date("2025-08-21T05:05:46.325Z"),
    nick: "<value>",
    pending: false,
    premiumSince: new Date("2025-04-22T04:07:20.401Z"),
    roles: [
      "<value 1>",
      "<value 2>",
    ],
    user: {
      id: "<value>",
      username: "Dora.Toy69",
      avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
      discriminator: "<value>",
      publicFlags: 159404,
      flags: 192637,
      globalName: null,
      primaryGuild: {
        identityGuildId: "<value>",
        identityEnabled: false,
        tag: "<value>",
        badge: "<value>",
      },
    },
    mute: false,
    deaf: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.PrivateGuildMemberResponse](../../models/components/privateguildmemberresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |