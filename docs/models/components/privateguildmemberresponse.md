# PrivateGuildMemberResponse

## Example Usage

```typescript
import { PrivateGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PrivateGuildMemberResponse = {
  flags: 702360,
  joinedAt: new Date("2025-11-29T12:00:41.055Z"),
  pending: false,
  roles: [
    "<value>",
  ],
  user: {
    id: "<value>",
    username: "Kailee_Williamson41",
    discriminator: "<value>",
    publicFlags: 454418,
    flags: 716466,
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