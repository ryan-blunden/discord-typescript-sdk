# CreateThreadFromMessageResponse

## Example Usage

```typescript
import { CreateThreadFromMessageResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateThreadFromMessageResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    type: 13,
    flags: 420564,
    guildId: "<value>",
    name: "<value>",
    ownerId: "<value>",
    threadMetadata: {
      archived: true,
      archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
      autoArchiveDuration: 4320,
      locked: true,
    },
    messageCount: 953130,
    memberCount: 958822,
    totalMessageSent: 809044,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.ThreadResponse](../../models/components/threadresponse.md) | :heavy_check_mark:                                                     | N/A                                                                    |