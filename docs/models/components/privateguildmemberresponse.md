# PrivateGuildMemberResponse

## Example Usage

```typescript
import { PrivateGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PrivateGuildMemberResponse = {
  avatar: "https://loremflickr.com/3881/2142?lock=8633169920078739",
  banner: "<value>",
  communicationDisabledUntil: new Date("2024-01-11T22:15:40.140Z"),
  flags: 454418,
  joinedAt: new Date("2026-02-24T05:55:10.581Z"),
  nick: "<value>",
  pending: false,
  premiumSince: new Date("2025-01-12T21:06:27.881Z"),
  roles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  deaf: true,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                                                                                 | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | the member's guild avatar hash                                                                                                                           |
| `avatarDecorationData`                                                                                                                                   | [components.UserAvatarDecorationResponse](../../models/components/useravatardecorationresponse.md)                                                       | :heavy_minus_sign:                                                                                                                                       | data for the member's guild avatar decoration                                                                                                            |
| `banner`                                                                                                                                                 | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | the member's guild banner hash                                                                                                                           |
| `communicationDisabledUntil`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_check_mark:                                                                                                                                       | when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out |
| `flags`                                                                                                                                                  | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | guild member flags represented as a bit set, defaults to 0                                                                                               |
| `joinedAt`                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_check_mark:                                                                                                                                       | when the user joined the guild                                                                                                                           |
| `nick`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | this user's guild nickname                                                                                                                               |
| `pending`                                                                                                                                                | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | whether the user has not yet passed the guild's Membership Screening requirements                                                                        |
| `premiumSince`                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_check_mark:                                                                                                                                       | when the user started boosting the guild                                                                                                                 |
| `roles`                                                                                                                                                  | *string*[]                                                                                                                                               | :heavy_check_mark:                                                                                                                                       | array of role object ids                                                                                                                                 |
| `collectibles`                                                                                                                                           | [components.UserCollectiblesResponse](../../models/components/usercollectiblesresponse.md)                                                               | :heavy_minus_sign:                                                                                                                                       | data for the member's collectibles                                                                                                                       |
| `user`                                                                                                                                                   | [components.UserResponse](../../models/components/userresponse.md)                                                                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `mute`                                                                                                                                                   | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | whether the user is muted in voice channels                                                                                                              |
| `deaf`                                                                                                                                                   | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | whether the user is deafened in voice channels                                                                                                           |
| `permissions`                                                                                                                                            | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |