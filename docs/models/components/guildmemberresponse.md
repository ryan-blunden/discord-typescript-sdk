# GuildMemberResponse

## Example Usage

```typescript
import { GuildMemberResponse } from "@ryan.blunden/discord/models/components";

let value: GuildMemberResponse = {
  flags: 528914,
  joinedAt: new Date("2023-02-16T13:06:35.195Z"),
  pending: false,
  roles: [
    "<value>",
  ],
  user: {
    id: "<value>",
    username: "Frida53",
    discriminator: "<value>",
    publicFlags: 466629,
    flags: 78350,
  },
  mute: false,
  deaf: false,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `avatarDecorationData`                                                                             | [components.UserAvatarDecorationResponse](../../models/components/useravatardecorationresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `banner`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `communicationDisabledUntil`                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `flags`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `joinedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nick`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `pending`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `premiumSince`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `roles`                                                                                            | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `user`                                                                                             | [components.UserResponse](../../models/components/userresponse.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `mute`                                                                                             | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deaf`                                                                                             | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |