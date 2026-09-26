# ThreadSearchResponseResult


## Supported Types

### `components.ThreadSearchResponse`

```typescript
const value: components.ThreadSearchResponse = {
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

### `components.SearchIndexNotReadyResponse`

```typescript
const value: components.SearchIndexNotReadyResponse = {
  message: "<value>",
  code: 551489,
  documentsIndexed: 466945,
  retryAfter: 87144,
};
```

