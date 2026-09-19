# CountGuildScheduledEventUsersResponse

## Example Usage

```typescript
import { CountGuildScheduledEventUsersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CountGuildScheduledEventUsersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    guildScheduledEventCount: 89990,
    guildScheduledEventExceptionCounts: {
      "key": 643041,
      "key1": 527537,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [components.ScheduledEventUserCountResponse](../../models/components/scheduledeventusercountresponse.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |