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

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `headers`                   | Record<string, *string*[]>  | :heavy_check_mark:          | N/A                         |
| `result`                    | *operations.ResponseBody*[] | :heavy_check_mark:          | N/A                         |