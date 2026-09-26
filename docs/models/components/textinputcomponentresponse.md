# TextInputComponentResponse

## Example Usage

```typescript
import { TextInputComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TextInputComponentResponse = {
  type: 8,
  id: 245530,
  customId: "<id>",
  style: 2,
  label: "<value>",
  minLength: 684349,
  maxLength: 346492,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.TextInputComponentResponseType](../../models/components/textinputcomponentresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `style`                                                                                                | [components.TextInputStyleTypes](../../models/components/textinputstyletypes.md)                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `label`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `value`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `placeholder`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `required`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `minLength`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `maxLength`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |