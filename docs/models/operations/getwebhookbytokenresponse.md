# GetWebhookByTokenResponse

## Example Usage

```typescript
import { GetWebhookByTokenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetWebhookByTokenResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.GetWebhookByTokenResponseBody* | :heavy_check_mark:                         | N/A                                        |