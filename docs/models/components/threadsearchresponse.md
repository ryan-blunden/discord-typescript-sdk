# ThreadSearchResponse

## Example Usage

```typescript
import { ThreadSearchResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadSearchResponse = {
  threads: [
    {
      id: "<value>",
      type: 15,
      flags: 648746,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 257651,
      memberCount: 159639,
      totalMessageSent: 279313,
    },
  ],
  members: [
    {
      id: "<value>",
      userId: "<value>",
      joinTimestamp: new Date("2024-09-15T06:20:55.783Z"),
      flags: 687951,
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