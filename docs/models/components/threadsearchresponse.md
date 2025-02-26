# ThreadSearchResponse

## Example Usage

```typescript
import { ThreadSearchResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadSearchResponse = {
  threads: [
    {
      id: "<value>",
      flags: 548814,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 715190,
      memberCount: 602763,
      totalMessageSent: 544883,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2024-04-09T07:48:57.030Z"),
      flags: 645894,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `threads`                                                                            | [components.ThreadResponse](../../models/components/threadresponse.md)[]             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `members`                                                                            | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `firstMessages`                                                                      | [components.MessageResponse](../../models/components/messageresponse.md)[]           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `totalResults`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |