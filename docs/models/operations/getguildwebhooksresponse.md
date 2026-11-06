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
      applicationId: "<value>",
      avatar: "https://loremflickr.com/785/3808?lock=1114930363882870",
      channelId: "<value>",
      id: "<value>",
      name: "<value>",
      type: 2,
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `headers`                                   | Record<string, *string*[]>                  | :heavy_check_mark:                          | N/A                                         |
| `result`                                    | *operations.GetGuildWebhooksResponseBody*[] | :heavy_check_mark:                          | N/A                                         |