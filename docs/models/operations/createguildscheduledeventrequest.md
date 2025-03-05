# CreateGuildScheduledEventRequest

## Example Usage

```typescript
import { CreateGuildScheduledEventRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    scheduledStartTime: new Date("2025-01-13T18:41:59.111Z"),
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `guildId`                                         | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `requestBody`                                     | *operations.CreateGuildScheduledEventRequestBody* | :heavy_check_mark:                                | N/A                                               |