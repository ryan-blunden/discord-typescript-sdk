# ListGuildScheduledEventExceptionUsersRequest

## Example Usage

```typescript
import { ListGuildScheduledEventExceptionUsersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildScheduledEventExceptionUsersRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
  guildScheduledEventExceptionId: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `guildId`                        | *string*                         | :heavy_check_mark:               | N/A                              |
| `guildScheduledEventId`          | *string*                         | :heavy_check_mark:               | N/A                              |
| `guildScheduledEventExceptionId` | *string*                         | :heavy_check_mark:               | N/A                              |
| `withMember`                     | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `limit`                          | *number*                         | :heavy_minus_sign:               | N/A                              |
| `before`                         | *string*                         | :heavy_minus_sign:               | N/A                              |
| `after`                          | *string*                         | :heavy_minus_sign:               | N/A                              |