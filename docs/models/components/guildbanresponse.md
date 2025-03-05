# GuildBanResponse

## Example Usage

```typescript
import { GuildBanResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildBanResponse = {
  user: {
    id: "<value>",
    username: "Neva_Schneider41",
    discriminator: "<value>",
    publicFlags: 282079,
    flags: 690987,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `reason`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |