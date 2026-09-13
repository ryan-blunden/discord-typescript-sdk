# ByNWeekday

## Example Usage

```typescript
import { ByNWeekday } from "@ryan.blunden/discord-sdk/models/components";

let value: ByNWeekday = {
  n: 719568,
  day: 1,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `n`                                                                                    | *number*                                                                               | :heavy_check_mark:                                                                     | The week to reoccur on (1-5, where 5 represents the last week)                         |
| `day`                                                                                  | [components.RecurrenceRuleWeekdays](../../models/components/recurrenceruleweekdays.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |