# ThreadsResponse

## Example Usage

```typescript
import { ThreadsResponse } from "discord-sdk/models/components";

let value: ThreadsResponse = {
  threads: [
    {
      id: "<value>",
      type: 11,
      flags: 770376,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 380130,
      memberCount: 622192,
      totalMessageSent: 893406,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2022-06-23T14:19:45.415Z"),
      flags: 8906,
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