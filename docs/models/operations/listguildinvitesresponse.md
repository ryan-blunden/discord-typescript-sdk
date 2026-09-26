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
      type: 2,
      code: "<value>",
      expiresAt: new Date("2024-09-17T04:33:52.223Z"),
      channel: {
        id: "<value>",
        type: 4,
        name: "<value>",
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