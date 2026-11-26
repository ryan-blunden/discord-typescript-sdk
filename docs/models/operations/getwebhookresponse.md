# GetWebhookResponse

## Example Usage

```typescript
import { GetWebhookResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetWebhookResponse = {
  headers: {},
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

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetWebhookResponseBody* | :heavy_check_mark:                  | N/A                                 |