# BulkBanUsersFromGuildResponse

## Example Usage

```typescript
import { BulkBanUsersFromGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkBanUsersFromGuildResponse = {
  headers: {},
  result: {
    bannedUsers: [
      "<value 1>",
      "<value 2>",
    ],
    failedUsers: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.BulkBanUsersResponse](../../models/components/bulkbanusersresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |