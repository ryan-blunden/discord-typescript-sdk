# CreateGuildScheduledEventRequest

## Example Usage

```typescript
import { CreateGuildScheduledEventRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    scheduledStartTime: new Date("2024-04-10T04:19:14.159Z"),
    privacyLevel: 2,
    entityType: 2,
    entityMetadata: {
      location: "<value>",
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `guildId`                                         | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `requestBody`                                     | *operations.CreateGuildScheduledEventRequestBody* | :heavy_check_mark:                                | N/A                                               |