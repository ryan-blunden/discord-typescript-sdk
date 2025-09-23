# DeleteChannelResponse

## Example Usage

```typescript
import { DeleteChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: DeleteChannelResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    type: 15,
    flags: 273567,
    guildId: "<value>",
    name: "<value>",
    ownerId: "<value>",
    threadMetadata: {
      archived: true,
      locked: false,
    },
    messageCount: 986177,
    memberCount: 141201,
    totalMessageSent: 971867,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.DeleteChannelResponseBody* | :heavy_check_mark:                     | N/A                                    |