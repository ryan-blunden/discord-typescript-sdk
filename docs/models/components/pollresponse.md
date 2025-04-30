# PollResponse

## Example Usage

```typescript
import { PollResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollResponse = {
  question: {},
  answers: [
    {
      answerId: 538973,
      pollMedia: {},
    },
  ],
  expiry: new Date("2024-12-06T13:08:42.364Z"),
  allowMultiselect: false,
  layoutType: 892223,
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