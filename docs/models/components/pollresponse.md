# PollResponse

## Example Usage

```typescript
import { PollResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollResponse = {
  question: {},
  answers: [
    {
      answerId: 903720,
      pollMedia: {},
    },
  ],
  expiry: new Date("2023-04-02T10:20:37.470Z"),
  allowMultiselect: false,
  layoutType: 552193,
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