# ActionGuildJoinRequestResponse

## Example Usage

```typescript
import { ActionGuildJoinRequestResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ActionGuildJoinRequestResponse = {
  headers: {
    "key": [],
  },
  result: {
    id: "<value>",
    createdAt: new Date("2025-11-21T20:21:08.798Z"),
    reviewedAt: new Date("2026-12-31T11:35:44.072Z"),
    applicationStatus: "STARTED",
    rejectionReason: "<value>",
    guildId: "<value>",
    userId: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.GuildJoinRequestResponse](../../models/components/guildjoinrequestresponse.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |