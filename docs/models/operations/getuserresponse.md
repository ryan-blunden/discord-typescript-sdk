# GetUserResponse

## Example Usage

```typescript
import { GetUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetUserResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    username: "Leilani_Hegmann",
    discriminator: "<value>",
    publicFlags: 918750,
    flags: 298611,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |