# ThreadsResponse

## Example Usage

```typescript
import { ThreadsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadsResponse = {
  threads: [
    {
      id: "<value>",
      flags: 507819,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 211584,
      memberCount: 493800,
      totalMessageSent: 812753,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2025-08-25T15:21:53.101Z"),
      flags: 666762,
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