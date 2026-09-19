# ScheduledEventUserCountResponse

## Example Usage

```typescript
import { ScheduledEventUserCountResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ScheduledEventUserCountResponse = {
  guildScheduledEventCount: 353962,
  guildScheduledEventExceptionCounts: {
    "key": 799452,
    "key1": 854965,
    "key2": 562127,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `guildScheduledEventCount`                             | *number*                                               | :heavy_check_mark:                                     | The number of users subscribed to the scheduled event  |
| `guildScheduledEventExceptionCounts`                   | Record<string, *number*>                               | :heavy_check_mark:                                     | Map of exception IDs to user counts for each exception |