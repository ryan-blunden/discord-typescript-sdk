# GuildBanResponse

## Example Usage

```typescript
import { GuildBanResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildBanResponse = {
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
  reason: null,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `reason`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |