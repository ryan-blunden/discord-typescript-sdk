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
    applicationId: "<value>",
    avatar: null,
    channelId: "<value>",
    id: "<value>",
    name: "<value>",
    type: 2,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.GetWebhookByTokenResponseBody* | :heavy_check_mark:                         | N/A                                        |