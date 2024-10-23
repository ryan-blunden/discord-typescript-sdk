# GuildBanResponse

## Example Usage

```typescript
import { GuildBanResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildBanResponse = {
  user: {
    id: "<value>",
    username: "Ayana_Veum",
    discriminator: "<value>",
    publicFlags: 112081,
    flags: 275288,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `reason`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |