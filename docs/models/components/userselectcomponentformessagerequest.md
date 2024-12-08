# UserSelectComponentForMessageRequest

## Example Usage

```typescript
import { UserSelectComponentForMessageRequest } from "@ryan.blunden/discord/models/components";

let value: UserSelectComponentForMessageRequest = {
  customId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `placeholder`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `minValues`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `maxValues`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `disabled`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `defaultValues`                                                                          | [components.UserSelectDefaultValue](../../models/components/userselectdefaultvalue.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |