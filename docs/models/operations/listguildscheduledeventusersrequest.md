# ListGuildScheduledEventUsersRequest

## Example Usage

```typescript
import { ListGuildScheduledEventUsersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildScheduledEventUsersRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `guildId`               | *string*                | :heavy_check_mark:      | N/A                     |
| `guildScheduledEventId` | *string*                | :heavy_check_mark:      | N/A                     |
| `withMember`            | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `limit`                 | *number*                | :heavy_minus_sign:      | N/A                     |
| `before`                | *string*                | :heavy_minus_sign:      | N/A                     |
| `after`                 | *string*                | :heavy_minus_sign:      | N/A                     |