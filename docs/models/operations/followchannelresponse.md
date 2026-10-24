# FollowChannelResponse

## Example Usage

```typescript
import { FollowChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: FollowChannelResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    channelId: "<value>",
    webhookId: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ChannelFollowerResponse](../../models/components/channelfollowerresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |