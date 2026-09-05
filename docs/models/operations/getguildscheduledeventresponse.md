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
    description: "coaxingly pish baggy wound narrow but firm abaft if instead",
    channelId: "<value>",
    creatorId: "<value>",
    image: "https://loremflickr.com/3162/1827?lock=1932062679932636",
    scheduledStartTime: new Date("2026-04-10T00:31:13.755Z"),
    scheduledEndTime: new Date("2026-09-05T19:18:42.228Z"),
    status: 2,
    entityType: 3,
    entityId: "<value>",
    recurrenceRule: {
      start: new Date("2024-12-18T10:55:52.189Z"),
      frequency: 3,
      interval: 174956,
      byWeekday: [
        1,
      ],
      byNWeekday: [],
      byMonth: [],
      byMonthDay: [
        733968,
        671056,
      ],
    },
    privacyLevel: 2,
    guildScheduledEventExceptions: [],
    entityMetadata: {},
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.GetGuildScheduledEventResponseBody* | :heavy_check_mark:                              | N/A                                             |