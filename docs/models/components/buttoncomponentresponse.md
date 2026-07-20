# ButtonComponentResponse

## Example Usage

```typescript
import { ButtonComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ButtonComponentResponse = {
  type: 9,
  id: 891756,
  style: 3,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [components.ButtonComponentResponseType](../../models/components/buttoncomponentresponsetype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `customId`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `style`                                                                                          | [components.ButtonStyleTypes](../../models/components/buttonstyletypes.md)                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `label`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `disabled`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `emoji`                                                                                          | [components.ComponentEmojiResponse](../../models/components/componentemojiresponse.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `url`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `skuId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |