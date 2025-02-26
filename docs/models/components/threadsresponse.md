# ThreadsResponse

## Example Usage

```typescript
import { ThreadsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadsResponse = {
  threads: [
    {
      id: "<value>",
      flags: 577305,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 893718,
      memberCount: 460831,
      totalMessageSent: 179531,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2024-04-10T20:54:26.937Z"),
      flags: 381627,
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