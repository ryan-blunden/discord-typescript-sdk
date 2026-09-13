# ThreadSearchResponse

## Example Usage

```typescript
import { ThreadSearchResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadSearchResponse = {
  threads: [
    {
      id: "<value>",
      type: 12,
      flags: 208413,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      threadMetadata: {
        archived: true,
        archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
        autoArchiveDuration: 4320,
        locked: true,
      },
      messageCount: 861725,
      memberCount: 120176,
      totalMessageSent: 694491,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2024-02-27T22:10:29.877Z"),
      flags: 189669,
    },
  ],
  hasMore: false,
  totalResults: 692572,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `threads`                                                                            | [components.ThreadResponse](../../models/components/threadresponse.md)[]             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `members`                                                                            | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `firstMessages`                                                                      | [components.MessageResponse](../../models/components/messageresponse.md)[]           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `totalResults`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |