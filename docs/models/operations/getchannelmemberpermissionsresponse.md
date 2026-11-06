# GetChannelMemberPermissionsResponse

## Example Usage

```typescript
import { GetChannelMemberPermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetChannelMemberPermissionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
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