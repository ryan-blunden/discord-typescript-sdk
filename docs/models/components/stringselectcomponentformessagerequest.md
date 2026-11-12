# StringSelectComponentForMessageRequest

## Example Usage

```typescript
import { StringSelectComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: StringSelectComponentForMessageRequest = {
  type: 12,
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.StringSelectComponentForMessageRequestType](../../models/components/stringselectcomponentformessagerequesttype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `customId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `placeholder`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `minValues`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `maxValues`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `disabled`                                                                                                                     | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `required`                                                                                                                     | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `options`                                                                                                                      | [components.StringSelectOptionForRequest](../../models/components/stringselectoptionforrequest.md)[]                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |