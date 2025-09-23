# CreateWebhookResponse

## Example Usage

```typescript
import { CreateWebhookResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateWebhookResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.GuildIncomingWebhookResponse](../../models/components/guildincomingwebhookresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |