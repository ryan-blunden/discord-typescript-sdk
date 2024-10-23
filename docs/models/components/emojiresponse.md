# EmojiResponse

## Example Usage

```typescript
import { EmojiResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: EmojiResponse = {
  id: "<value>",
  name: "<value>",
  roles: [
    "<value>",
  ],
  requireColons: false,
  managed: false,
  animated: false,
  available: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `roles`                                                            | *string*[]                                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `requireColons`                                                    | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `managed`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `animated`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `available`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |