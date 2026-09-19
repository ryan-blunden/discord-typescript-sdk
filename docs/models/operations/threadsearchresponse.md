# ThreadSearchResponse

## Example Usage

```typescript
import { ThreadSearchResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ThreadSearchResponse = {
  headers: {
    "key": [],
  },
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
    totalResults: 206625,
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.ThreadSearchResponseResult* | :heavy_check_mark:                      | N/A                                     |