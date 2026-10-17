# UpdateGuildScheduledEventExceptionResponse

## Example Usage

```typescript
import { UpdateGuildScheduledEventExceptionResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildScheduledEventExceptionResponse = {
  headers: {},
  result: {
    eventId: "<value>",
    eventExceptionId: "<value>",
    scheduledStartTime: new Date("2026-12-04T16:09:26.893Z"),
    scheduledEndTime: null,
    isCanceled: false,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                          | Record<string, *string*[]>                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `result`                                                                                                           | [components.GuildScheduledEventExceptionResponse](../../models/components/guildscheduledeventexceptionresponse.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |