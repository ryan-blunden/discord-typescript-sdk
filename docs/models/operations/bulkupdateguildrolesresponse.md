# BulkUpdateGuildRolesResponse

## Example Usage

```typescript
import { BulkUpdateGuildRolesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateGuildRolesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.GuildRoleResponse](../../models/components/guildroleresponse.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |