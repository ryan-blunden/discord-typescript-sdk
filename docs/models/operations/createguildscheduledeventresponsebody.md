# CreateGuildScheduledEventResponseBody

200 response for create_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  description: "afore whenever handful yippee winding",
  channelId: "<value>",
  creatorId: "<value>",
  image: "https://loremflickr.com/3577/1607?lock=6349866159039430",
  scheduledStartTime: new Date("2025-02-22T14:48:00.218Z"),
  scheduledEndTime: new Date("2024-02-01T06:53:00.834Z"),
  status: 1,
  entityType: 1,
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
  entityMetadata: {
    location: "<value>",
  },
};
```

### `components.StageScheduledEventResponse`

```typescript
const value: components.StageScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  description: "mid porter however fatally now phooey extremely",
  channelId: "<value>",
  creatorId: "<value>",
  image: "https://picsum.photos/seed/FTjF1LIvDF/3111/3057",
  scheduledStartTime: new Date("2024-09-15T06:40:47.904Z"),
  scheduledEndTime: new Date("2024-04-15T01:12:44.430Z"),
  status: 2,
  entityType: 2,
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
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  description: null,
  channelId: "<value>",
  creatorId: "<value>",
  image: null,
  scheduledStartTime: new Date("2025-10-28T18:29:00.206Z"),
  scheduledEndTime: null,
  status: 3,
  entityType: 2,
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
};
```

