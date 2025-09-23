# ListPublicArchivedThreadsResponse

## Example Usage

```typescript
import { ListPublicArchivedThreadsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListPublicArchivedThreadsResponse = {
  headers: {},
  result: {
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
          locked: false,
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
        joinTimestamp: new Date("2023-02-27T22:10:29.877Z"),
        flags: 189669,
      },
    ],
    hasMore: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.ThreadsResponse](../../models/components/threadsresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |