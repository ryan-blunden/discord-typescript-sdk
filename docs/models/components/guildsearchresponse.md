# GuildSearchResponse

## Example Usage

```typescript
import { GuildSearchResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildSearchResponse = {
  messages: [
    [],
  ],
  doingDeepHistoricalIndex: false,
  totalResults: 847478,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `messages`                                                                               | [components.SearchMessageResponse](../../models/components/searchmessageresponse.md)[][] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `doingDeepHistoricalIndex`                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `totalResults`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `threads`                                                                                | [components.ThreadResponse](../../models/components/threadresponse.md)[]                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `members`                                                                                | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md)[]     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `documentsIndexed`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |