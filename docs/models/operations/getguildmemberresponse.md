# GetGuildMemberResponse

## Example Usage

```typescript
import { GetGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildMemberResponse = {
  headers: {},
  result: {
    avatar: "https://picsum.photos/seed/QVLEEarqW/5/458",
    banner: "<value>",
    communicationDisabledUntil: new Date("2026-09-19T01:38:38.368Z"),
    flags: 606146,
    joinedAt: new Date("2024-12-12T15:02:51.883Z"),
    nick: "<value>",
    pending: true,
    premiumSince: new Date("2025-04-08T00:03:47.749Z"),
    roles: [],
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |