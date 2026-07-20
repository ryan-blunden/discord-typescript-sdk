# ScheduledEventUserResponse

## Example Usage

```typescript
import { ScheduledEventUserResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ScheduledEventUserResponse = {
  guildScheduledEventId: "<value>",
  userId: "<value>",
  response: 0,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `guildScheduledEventId`                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `guildScheduledEventExceptionId`                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | ID of the scheduled event exception                                                                        |
| `userId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `user`                                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `member`                                                                                                   | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `response`                                                                                                 | [components.GuildScheduledEventUserResponses](../../models/components/guildscheduledeventuserresponses.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |