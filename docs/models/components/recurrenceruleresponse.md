# RecurrenceRuleResponse

## Example Usage

```typescript
import { RecurrenceRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: RecurrenceRuleResponse = {
  start: new Date("2025-04-24T15:16:33.460Z"),
  frequency: 2,
  interval: 431839,
  byWeekday: [],
  byNWeekday: [],
  byMonth: [
    3,
  ],
  byMonthDay: [
    980151,
    450884,
    207622,
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Starting time of the recurrence interval                                                      |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Ending time of the recurrence interval                                                        |
| `frequency`                                                                                   | [components.RecurrenceRuleFrequencies](../../models/components/recurrencerulefrequencies.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `interval`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The spacing between events, defined by frequency                                              |
| `byWeekday`                                                                                   | [components.RecurrenceRuleWeekdays](../../models/components/recurrenceruleweekdays.md)[]      | :heavy_check_mark:                                                                            | Set of specific days within a week for the event to recur on                                  |
| `byNWeekday`                                                                                  | [components.ByNWeekdayResponse](../../models/components/bynweekdayresponse.md)[]              | :heavy_check_mark:                                                                            | List of specific days within a specific week to recur on                                      |
| `byMonth`                                                                                     | [components.RecurrenceRuleMonths](../../models/components/recurrencerulemonths.md)[]          | :heavy_check_mark:                                                                            | Set of specific months to recur on                                                            |
| `byMonthDay`                                                                                  | *number*[]                                                                                    | :heavy_check_mark:                                                                            | Set of specific dates within a month to recur on                                              |
| `byYearDay`                                                                                   | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | Set of days within a year to recur on (1-364)                                                 |
| `count`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of times the event is allowed to recur                                           |