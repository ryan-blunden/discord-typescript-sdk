# InviteResolveResponse

## Example Usage

```typescript
import { InviteResolveResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: InviteResolveResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    code: "<value>",
    channel: {
      id: "<value>",
      type: 2,
    },
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.InviteResolveResponseBody* | :heavy_check_mark:                     | N/A                                    |