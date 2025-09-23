# ListGuildScheduledEventUsersResponse

## Example Usage

```typescript
import { ListGuildScheduledEventUsersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildScheduledEventUsersResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      guildScheduledEventId: "<value>",
      userId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ScheduledEventUserResponse](../../models/components/scheduledeventuserresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |