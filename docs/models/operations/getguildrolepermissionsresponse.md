# GetGuildRolePermissionsResponse

## Example Usage

```typescript
import { GetGuildRolePermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildRolePermissionsResponse = {
  headers: {},
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