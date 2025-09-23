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
| `answerCounts`                                                                               | [components.PollResultsEntryResponse](../../models/components/pollresultsentryresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `isFinalized`                                                                                | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |