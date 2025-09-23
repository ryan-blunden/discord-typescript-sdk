# GetGuildWebhooksResponse

## Example Usage

```typescript
import { GetGuildWebhooksResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWebhooksResponse = {
  headers: {
    "key": [],
  },
  result: [
    {
      id: "<value>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `headers`                                   | Record<string, *string*[]>                  | :heavy_check_mark:                          | N/A                                         |
| `result`                                    | *operations.GetGuildWebhooksResponseBody*[] | :heavy_check_mark:                          | N/A                                         |