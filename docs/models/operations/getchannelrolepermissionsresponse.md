# GetChannelRolePermissionsResponse

## Example Usage

```typescript
import { GetChannelRolePermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetChannelRolePermissionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    permissions: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.PermissionsResponse](../../models/components/permissionsresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |