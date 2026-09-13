# GuildScheduledEventExceptionPatchRequestPartial

## Example Usage

```typescript
import { GuildScheduledEventExceptionPatchRequestPartial } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildScheduledEventExceptionPatchRequestPartial = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduledStartTime`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Overridden start time of this occurrence                                                      |
| `scheduledEndTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Overridden end time of this occurrence                                                        |
| `isCanceled`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this occurrence is canceled                                                           |