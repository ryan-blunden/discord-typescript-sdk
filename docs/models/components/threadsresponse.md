# ThreadsResponse

## Example Usage

```typescript
import { ThreadsResponse } from "@ryan.blunden/discord/models/components";

let value: ThreadsResponse = {
  threads: [
    {
      id: "<value>",
      flags: 14126,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 532694,
      memberCount: 885336,
      totalMessageSent: 417304,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2024-03-28T05:07:38.347Z"),
      flags: 453310,
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