# GetGuildScheduledEventRequest

## Example Usage

```typescript
import { GetGuildScheduledEventRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildScheduledEventRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `guildId`               | *string*                | :heavy_check_mark:      | N/A                     |
| `guildScheduledEventId` | *string*                | :heavy_check_mark:      | N/A                     |
| `withUserCount`         | *boolean*               | :heavy_minus_sign:      | N/A                     |