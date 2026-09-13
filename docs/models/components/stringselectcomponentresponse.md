# StringSelectComponentResponse

## Example Usage

```typescript
import { StringSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StringSelectComponentResponse = {
  type: 2,
  id: 842174,
  customId: "<id>",
  minValues: 77339,
  maxValues: 445843,
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.StringSelectComponentResponseType](../../models/components/stringselectcomponentresponsetype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `placeholder`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `minValues`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `maxValues`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `disabled`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `options`                                                                                                    | [components.StringSelectOptionResponse](../../models/components/stringselectoptionresponse.md)[]             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |