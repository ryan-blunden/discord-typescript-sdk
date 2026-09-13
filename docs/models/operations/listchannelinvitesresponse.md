# ListChannelInvitesResponse

## Example Usage

```typescript
import { ListChannelInvitesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListChannelInvitesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `headers`                   | Record<string, *string*[]>  | :heavy_check_mark:          | N/A                         |
| `result`                    | *operations.ResponseBody*[] | :heavy_check_mark:          | N/A                         |