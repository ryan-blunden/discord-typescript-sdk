# VoiceScheduledEventResponse

## Example Usage

```typescript
import { VoiceScheduledEventResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: VoiceScheduledEventResponse = {
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

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `guildId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Name of the scheduled event                                                                                          |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Description of the scheduled event                                                                                   |
| `channelId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Channel ID in which the scheduled event will be hosted, or null if entity type is EXTERNAL                           |
| `creatorId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the user that created the scheduled event                                                                      |
| `creator`                                                                                                            | [components.UserResponse](../../models/components/userresponse.md)                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `image`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Cover image hash of the scheduled event                                                                              |
| `scheduledStartTime`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | When the scheduled event will start                                                                                  |
| `scheduledEndTime`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | When the scheduled event will end, or null if no end time                                                            |
| `status`                                                                                                             | [components.GuildScheduledEventStatuses](../../models/components/guildscheduledeventstatuses.md)                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `entityType`                                                                                                         | [components.VoiceScheduledEventResponseEntityType](../../models/components/voicescheduledeventresponseentitytype.md) | :heavy_check_mark:                                                                                                   | Type of hosting entity associated with the scheduled event                                                           |
| `entityId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the hosting entity associated with the scheduled event                                                         |
| `recurrenceRule`                                                                                                     | [components.RecurrenceRuleResponse](../../models/components/recurrenceruleresponse.md)                               | :heavy_check_mark:                                                                                                   | Recurrence rule for the scheduled event, or null if not recurring                                                    |
| `userCount`                                                                                                          | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Number of users subscribed to the scheduled event                                                                    |
| `privacyLevel`                                                                                                       | *2*                                                                                                                  | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `userRsvp`                                                                                                           | [components.ScheduledEventUserResponse](../../models/components/scheduledeventuserresponse.md)                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `guildScheduledEventExceptions`                                                                                      | [components.GuildScheduledEventExceptionResponse](../../models/components/guildscheduledeventexceptionresponse.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `entityMetadata`                                                                                                     | [components.EntityMetadataVoiceResponse](../../models/components/entitymetadatavoiceresponse.md)                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |