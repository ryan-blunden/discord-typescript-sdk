# GuildBanResponse

## Example Usage

```typescript
import { GuildBanResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildBanResponse = {
  user: {
    id: "<value>",
    username: "Alycia.Wilkinson",
    discriminator: "<value>",
    publicFlags: 189619,
    flags: 618795,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `reason`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |