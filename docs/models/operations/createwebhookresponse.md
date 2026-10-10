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
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    applicationId: "<value>",
    avatar: "https://picsum.photos/seed/ae0CeOnlGl/1101/1382",
    channelId: "<value>",
    id: "<value>",
    name: "<value>",
    type: 1,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.GuildIncomingWebhookResponse](../../models/components/guildincomingwebhookresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |