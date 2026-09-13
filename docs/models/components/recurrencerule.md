# RecurrenceRule

## Example Usage

```typescript
import { RecurrenceRule } from "@ryan.blunden/discord-sdk/models/components";

let value: RecurrenceRule = {
  start: new Date("2026-01-09T15:55:07.146Z"),
  frequency: 1,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Starting time of the recurrence interval                                                      |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Ending time of the recurrence interval                                                        |
| `frequency`                                                                                   | [components.RecurrenceRuleFrequencies](../../models/components/recurrencerulefrequencies.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `interval`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The spacing between events, defined by frequency                                              |
| `byWeekday`                                                                                   | [components.RecurrenceRuleWeekdays](../../models/components/recurrenceruleweekdays.md)[]      | :heavy_minus_sign:                                                                            | Set of specific days within a week for the event to recur on                                  |
| `byNWeekday`                                                                                  | [components.ByNWeekday](../../models/components/bynweekday.md)[]                              | :heavy_minus_sign:                                                                            | List of specific days within a specific week to recur on                                      |
| `byMonth`                                                                                     | [components.RecurrenceRuleMonths](../../models/components/recurrencerulemonths.md)[]          | :heavy_minus_sign:                                                                            | Set of specific months to recur on                                                            |
| `byMonthDay`                                                                                  | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | Set of specific dates within a month to recur on                                              |
| `byYearDay`                                                                                   | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | Set of days within a year to recur on (1-364)                                                 |
| `count`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of times the event is allowed to recur                                           |