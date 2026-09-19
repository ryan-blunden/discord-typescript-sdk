# UserSelectComponentResponse

## Example Usage

```typescript
import { UserSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserSelectComponentResponse = {
  type: 12,
  id: 704554,
  customId: "<id>",
  minValues: 332898,
  maxValues: 921854,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.UserSelectComponentResponseType](../../models/components/userselectcomponentresponsetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `customId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `placeholder`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `minValues`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxValues`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `disabled`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `defaultValues`                                                                                          | [components.UserSelectDefaultValueResponse](../../models/components/userselectdefaultvalueresponse.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |