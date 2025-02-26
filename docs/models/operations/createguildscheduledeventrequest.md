# CreateGuildScheduledEventRequest

## Example Usage

```typescript
import { CreateGuildScheduledEventRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    scheduledStartTime: new Date("2024-01-08T03:32:32.737Z"),
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `guildId`                                         | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `requestBody`                                     | *operations.CreateGuildScheduledEventRequestBody* | :heavy_check_mark:                                | N/A                                               |