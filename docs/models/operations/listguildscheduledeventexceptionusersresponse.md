# ListGuildScheduledEventExceptionUsersResponse

## Example Usage

```typescript
import { ListGuildScheduledEventExceptionUsersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildScheduledEventExceptionUsersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: [
    {
      guildScheduledEventId: "<value>",
      userId: "<value>",
      response: 0,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ScheduledEventUserResponse](../../models/components/scheduledeventuserresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |