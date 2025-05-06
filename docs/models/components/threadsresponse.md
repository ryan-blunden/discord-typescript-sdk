# ThreadsResponse

## Example Usage

```typescript
import { ThreadsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadsResponse = {
  threads: [
    {
      id: "<value>",
      type: 0,
      flags: 150638,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 322990,
      memberCount: 920643,
      totalMessageSent: 335288,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2025-02-17T20:54:18.290Z"),
      flags: 398092,
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