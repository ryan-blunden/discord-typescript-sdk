# PollResultsEntryResponse

## Example Usage

```typescript
import { PollResultsEntryResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollResultsEntryResponse = {
  id: 409343,
  count: 158823,
  meVoted: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *number*                                       | :heavy_check_mark:                             | The answer_id                                  |
| `count`                                        | *number*                                       | :heavy_check_mark:                             | The number of votes for this answer            |
| `meVoted`                                      | *boolean*                                      | :heavy_check_mark:                             | Whether the current user voted for this answer |