# GuildScheduledEventExceptionCreateRequest

## Example Usage

```typescript
import { GuildScheduledEventExceptionCreateRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildScheduledEventExceptionCreateRequest = {
  originalScheduledStartTime: new Date("2025-01-18T04:25:24.825Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduledStartTime`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Overridden start time of this occurrence                                                      |
| `scheduledEndTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Overridden end time of this occurrence                                                        |
| `originalScheduledStartTime`                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The original start time of the occurrence to create an exception for                          |
| `isCanceled`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this occurrence is canceled                                                           |