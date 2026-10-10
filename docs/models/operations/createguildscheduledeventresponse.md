# CreateGuildScheduledEventResponse

## Example Usage

```typescript
import { CreateGuildScheduledEventResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
    description:
      "boohoo ponder anenst co-producer ack euphonium once whereas yearly",
    channelId: "<value>",
    creatorId: "<value>",
    image: "https://loremflickr.com/106/1131?lock=5144088319130694",
    scheduledStartTime: new Date("2024-03-28T13:03:09.137Z"),
    scheduledEndTime: new Date("2026-09-24T20:23:23.065Z"),
    status: 4,
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
    guildScheduledEventExceptions: [
      {
        eventId: "<value>",
        eventExceptionId: "<value>",
        scheduledStartTime: new Date("2026-02-20T19:53:27.110Z"),
        scheduledEndTime: new Date("2026-01-16T03:24:39.717Z"),
        isCanceled: false,
      },
    ],
    entityMetadata: {},
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `headers`                                          | Record<string, *string*[]>                         | :heavy_check_mark:                                 | N/A                                                |
| `result`                                           | *operations.CreateGuildScheduledEventResponseBody* | :heavy_check_mark:                                 | N/A                                                |