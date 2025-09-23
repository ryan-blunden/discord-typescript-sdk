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
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | *operations.UpdateWebhookByTokenResponseBody* | :heavy_check_mark:                            | N/A                                           |