# PollResponse

## Example Usage

```typescript
import { PollResponse } from "discord-sdk/models/components";

let value: PollResponse = {
  question: {},
  answers: [
    {
      answerId: 648676,
      pollMedia: {},
    },
  ],
  expiry: new Date("2024-05-26T03:06:13.474Z"),
  allowMultiselect: false,
  layoutType: 707073,
  results: {
    isFinalized: false,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `question`                                                                                    | [components.PollMediaResponse](../../models/components/pollmediaresponse.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `answers`                                                                                     | [components.PollAnswerResponse](../../models/components/pollanswerresponse.md)[]              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiry`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `allowMultiselect`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `layoutType`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `results`                                                                                     | [components.PollResultsResponse](../../models/components/pollresultsresponse.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |