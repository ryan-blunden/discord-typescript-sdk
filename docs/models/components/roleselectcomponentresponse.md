# RoleSelectComponentResponse

## Example Usage

```typescript
import { RoleSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: RoleSelectComponentResponse = {
  type: 17,
  id: 67803,
  customId: "<id>",
  minValues: 646963,
  maxValues: 878944,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.RoleSelectComponentResponseType](../../models/components/roleselectcomponentresponsetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `customId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `placeholder`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `minValues`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxValues`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `disabled`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `defaultValues`                                                                                          | [components.RoleSelectDefaultValueResponse](../../models/components/roleselectdefaultvalueresponse.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |