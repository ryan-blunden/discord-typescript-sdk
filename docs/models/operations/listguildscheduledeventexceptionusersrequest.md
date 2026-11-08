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

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `guildId`                                     | *string*                                      | :heavy_check_mark:                            | The ID of the guild                           |
| `guildScheduledEventId`                       | *string*                                      | :heavy_check_mark:                            | The ID of the scheduled event                 |
| `guildScheduledEventExceptionId`              | *string*                                      | :heavy_check_mark:                            | The ID of the event exception                 |
| `withMember`                                  | *boolean*                                     | :heavy_minus_sign:                            | Include guild member data if it exists        |
| `limit`                                       | *number*                                      | :heavy_minus_sign:                            | Number of users to return (up to maximum 100) |
| `before`                                      | *string*                                      | :heavy_minus_sign:                            | Consider only users before given user id      |
| `after`                                       | *string*                                      | :heavy_minus_sign:                            | Consider only users after given user id       |