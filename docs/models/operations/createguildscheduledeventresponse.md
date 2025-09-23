# CreateGuildScheduledEventResponse

## Example Usage

```typescript
import { CreateGuildScheduledEventResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    id: "<value>",
    guildId: "<value>",
    name: "<value>",
    scheduledStartTime: new Date("2023-09-07T01:32:49.757Z"),
    entityMetadata: {
      location: "<value>",
    },
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `headers`                                          | Record<string, *string*[]>                         | :heavy_check_mark:                                 | N/A                                                |
| `result`                                           | *operations.CreateGuildScheduledEventResponseBody* | :heavy_check_mark:                                 | N/A                                                |