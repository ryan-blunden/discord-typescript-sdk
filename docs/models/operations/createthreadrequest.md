# CreateThreadRequest

## Example Usage

```typescript
import { CreateThreadRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateThreadRequest = {
  channelId: "<value>",
  requestBody: {
    name: "<value>",
    message: {},
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `channelId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `requestBody`                                              | *operations.CreateThreadChannelsThreadsRequestRequestBody* | :heavy_check_mark:                                         | N/A                                                        |