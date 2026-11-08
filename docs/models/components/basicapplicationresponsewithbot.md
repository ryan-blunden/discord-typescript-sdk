# BasicApplicationResponseWithBot

## Example Usage

```typescript
import { BasicApplicationResponseWithBot } from "@ryan.blunden/discord-sdk/models/components";

let value: BasicApplicationResponseWithBot = {
  id: "<value>",
  name: "<value>",
  icon: "<value>",
  description: "indeed founder alligator institute after amongst detain",
  type: 4,
  flags: 418805,
  flagsNew: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `icon`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *4*                                                                | :heavy_check_mark:                                                 | N/A                                                                |
| `coverImage`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `primarySkuId`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `flags`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `flagsNew`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `bot`                                                              | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |