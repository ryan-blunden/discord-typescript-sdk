# ListGuildScheduledEventsResponse

## Example Usage

```typescript
import { ListGuildScheduledEventsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildScheduledEventsResponse = {
  headers: {},
  result: [
    {
      id: "<value>",
      guildId: "<value>",
      name: "<value>",
      scheduledStartTime: new Date("2025-02-18T04:41:29.236Z"),
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `headers`                                           | Record<string, *string*[]>                          | :heavy_check_mark:                                  | N/A                                                 |
| `result`                                            | *operations.ListGuildScheduledEventsResponseBody*[] | :heavy_check_mark:                                  | N/A                                                 |