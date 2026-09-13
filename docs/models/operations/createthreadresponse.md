# CreateThreadResponse

## Example Usage

```typescript
import { CreateThreadResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateThreadResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    type: 7,
    flags: 830607,
    guildId: "<value>",
    name: "<value>",
    ownerId: "<value>",
    threadMetadata: {
      archived: true,
      archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
      autoArchiveDuration: 4320,
      locked: true,
    },
    messageCount: 394010,
    memberCount: 885587,
    totalMessageSent: 758735,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.CreatedThreadResponse](../../models/components/createdthreadresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |