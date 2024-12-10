# UserResponse

## Example Usage

```typescript
import { UserResponse } from "@ryan.blunden/discord/models/components";

let value: UserResponse = {
  id: "<value>",
  username: "Emilie_Bergnaum56",
  discriminator: "<value>",
  publicFlags: 523248,
  flags: 93940,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `username`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `avatar`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `discriminator`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `publicFlags`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `flags`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `bot`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `system`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `banner`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `accentColor`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `globalName`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `avatarDecorationData`                                                                             | [components.UserAvatarDecorationResponse](../../models/components/useravatardecorationresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `clan`                                                                                             | [components.UserPrimaryGuildResponse](../../models/components/userprimaryguildresponse.md)         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |