# PollResultsResponse

## Example Usage

```typescript
import { PollResultsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollResultsResponse = {
  answerCounts: [
    {
      id: 664207,
      count: 691381,
      meVoted: false,
    },
  ],
  isFinalized: true,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `answerCounts`                                                                               | [components.PollResultsEntryResponse](../../models/components/pollresultsentryresponse.md)[] | :heavy_check_mark:                                                                           | The counts for each answer                                                                   |
| `isFinalized`                                                                                | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether the votes have been precisely counted                                                |