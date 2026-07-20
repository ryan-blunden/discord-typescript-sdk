# UserResponse

## Example Usage

```typescript
import { UserResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserResponse = {
  id: "<value>",
  username: "Paxton_Wilderman",
  avatar: "https://loremflickr.com/770/3172?lock=7154209708824297",
  discriminator: "<value>",
  publicFlags: 167432,
  flags: 857182,
  globalName: "<value>",
  primaryGuild: {
    identityGuildId: "<value>",
    identityEnabled: false,
    tag: "<value>",
    badge: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `username`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | the user's username, not unique across the platform                                                |
| `avatar`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | the user's avatar hash                                                                             |
| `discriminator`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | the user's Discord-tag                                                                             |
| `publicFlags`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | the public flags on a user's account                                                               |
| `flags`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `bot`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | whether the user belongs to an OAuth2 application                                                  |
| `system`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | whether the user is an Official Discord System user (part of the urgent message system)            |
| `banner`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | the user's banner hash                                                                             |
| `accentColor`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | the user's banner color encoded as an integer representation of hexadecimal color code             |
| `globalName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | the user's display name, if it is set                                                              |
| `avatarDecorationData`                                                                             | [components.UserAvatarDecorationResponse](../../models/components/useravatardecorationresponse.md) | :heavy_minus_sign:                                                                                 | data for the user's avatar decoration                                                              |
| `collectibles`                                                                                     | [components.UserCollectiblesResponse](../../models/components/usercollectiblesresponse.md)         | :heavy_minus_sign:                                                                                 | data for the user's collectibles                                                                   |
| `primaryGuild`                                                                                     | [components.UserPrimaryGuildResponse](../../models/components/userprimaryguildresponse.md)         | :heavy_check_mark:                                                                                 | the user's primary guild                                                                           |