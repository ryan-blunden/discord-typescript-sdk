# GetGuildScheduledEventResponse

## Example Usage

```typescript
import { GetGuildScheduledEventResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildScheduledEventResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    id: "<value>",
    guildId: "<value>",
    name: "<value>",
    scheduledStartTime: new Date("2025-12-10T21:57:28.417Z"),
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.GetGuildScheduledEventResponseBody* | :heavy_check_mark:                              | N/A                                             |