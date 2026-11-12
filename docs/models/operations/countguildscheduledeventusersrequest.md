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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `guildId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The ID of the guild                                          |
| `guildScheduledEventId`                                      | *string*                                                     | :heavy_check_mark:                                           | The ID of the scheduled event                                |
| `guildScheduledEventExceptionIds`                            | *string*[]                                                   | :heavy_minus_sign:                                           | List of scheduled event exception ids to get user counts for |