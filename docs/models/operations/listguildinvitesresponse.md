# ListGuildInvitesResponse

## Example Usage

```typescript
import { ListGuildInvitesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildInvitesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: [
    {
      code: "<value>",
      channel: {
        id: "<value>",
        type: 2,
      },
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `headers`                                   | Record<string, *string*[]>                  | :heavy_check_mark:                          | N/A                                         |
| `result`                                    | *operations.ListGuildInvitesResponseBody*[] | :heavy_check_mark:                          | N/A                                         |