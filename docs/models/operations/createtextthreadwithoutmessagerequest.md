# CreateTextThreadWithoutMessageRequest

## Example Usage

```typescript
import { CreateTextThreadWithoutMessageRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateTextThreadWithoutMessageRequest = {
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `autoArchiveDuration`                              | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `rateLimitPerUser`                                 | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_minus_sign:                                 | N/A                                                |
| `invitable`                                        | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |