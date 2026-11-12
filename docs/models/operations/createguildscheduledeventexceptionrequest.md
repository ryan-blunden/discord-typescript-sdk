# CreateGuildScheduledEventExceptionRequest

## Example Usage

```typescript
import { CreateGuildScheduledEventExceptionRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildScheduledEventExceptionRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
  guildScheduledEventExceptionCreateRequest: {
    originalScheduledStartTime: new Date("2026-12-15T00:09:15.663Z"),
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the guild                                                                                                          |
| `guildScheduledEventId`                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the scheduled event                                                                                                |
| `guildScheduledEventExceptionCreateRequest`                                                                                  | [components.GuildScheduledEventExceptionCreateRequest](../../models/components/guildscheduledeventexceptioncreaterequest.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |