# GetUserResponse

## Example Usage

```typescript
import { GetUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetUserResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    username: "Leilani_Hegmann",
    avatar: "https://loremflickr.com/1195/1686?lock=5037552131582128",
    discriminator: "<value>",
    publicFlags: 158409,
    flags: 499357,
    globalName: "<value>",
    primaryGuild: {
      identityGuildId: "<value>",
      identityEnabled: false,
      tag: "<value>",
      badge: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |