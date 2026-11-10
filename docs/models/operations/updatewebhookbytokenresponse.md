# UpdateWebhookByTokenResponse

## Example Usage

```typescript
import { UpdateWebhookByTokenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateWebhookByTokenResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | *operations.UpdateWebhookByTokenResponseBody* | :heavy_check_mark:                            | N/A                                           |