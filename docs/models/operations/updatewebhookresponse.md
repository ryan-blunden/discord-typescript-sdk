# UpdateWebhookResponse

## Example Usage

```typescript
import { UpdateWebhookResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateWebhookResponse = {
  headers: {
    "key": [],
  },
  result: {
    applicationId: "<value>",
    avatar: "https://loremflickr.com/142/21?lock=3956019721036746",
    channelId: "<value>",
    id: "<value>",
    name: "<value>",
    type: 1,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.UpdateWebhookResponseBody* | :heavy_check_mark:                     | N/A                                    |