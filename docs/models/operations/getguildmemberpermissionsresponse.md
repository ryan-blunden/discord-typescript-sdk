# GetGuildMemberPermissionsResponse

## Example Usage

```typescript
import { GetGuildMemberPermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildMemberPermissionsResponse = {
  headers: {
    "key": [
      "<value 1>",
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