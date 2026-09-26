# GuildScheduledEventExceptionResponse

## Example Usage

```typescript
import { GuildScheduledEventExceptionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildScheduledEventExceptionResponse = {
  eventId: "<value>",
  eventExceptionId: "<value>",
  scheduledStartTime: new Date("2025-07-06T11:41:20.086Z"),
  scheduledEndTime: new Date("2024-03-06T09:21:47.837Z"),
  isCanceled: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eventExceptionId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduledStartTime`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Overridden start time of this occurrence                                                      |
| `scheduledEndTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Overridden end time of this occurrence                                                        |
| `isCanceled`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this occurrence is canceled                                                           |