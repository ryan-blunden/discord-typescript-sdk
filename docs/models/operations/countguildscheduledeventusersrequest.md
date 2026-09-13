# CountGuildScheduledEventUsersRequest

## Example Usage

```typescript
import { CountGuildScheduledEventUsersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CountGuildScheduledEventUsersRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `guildId`                         | *string*                          | :heavy_check_mark:                | N/A                               |
| `guildScheduledEventId`           | *string*                          | :heavy_check_mark:                | N/A                               |
| `guildScheduledEventExceptionIds` | *string*[]                        | :heavy_minus_sign:                | N/A                               |