# StringSelectComponentResponse

## Example Usage

```typescript
import { StringSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StringSelectComponentResponse = {
  id: 896672,
  customId: "<id>",
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `customId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `placeholder`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `minValues`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `maxValues`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `disabled`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `options`                                                                                        | [components.StringSelectOptionResponse](../../models/components/stringselectoptionresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |