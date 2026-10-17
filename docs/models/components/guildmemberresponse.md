# GuildMemberResponse

## Example Usage

```typescript
import { GuildMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildMemberResponse = {
  avatar: "https://loremflickr.com/2186/3188?lock=3459410405155060",
  banner: "<value>",
  communicationDisabledUntil: new Date("2026-05-10T07:13:03.192Z"),
  flags: 736741,
  joinedAt: new Date("2024-02-25T06:36:16.714Z"),
  nick: "<value>",
  pending: true,
  premiumSince: new Date("2026-04-03T16:33:20.908Z"),
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