# UpdateGuildScheduledEventExceptionRequest

## Example Usage

```typescript
import { UpdateGuildScheduledEventExceptionRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildScheduledEventExceptionRequest = {
  guildId: "<value>",
  guildScheduledEventId: "<value>",
  exceptionId: "<value>",
  guildScheduledEventExceptionPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `guildScheduledEventId`                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `exceptionId`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `guildScheduledEventExceptionPatchRequestPartial`                                                                                        | [components.GuildScheduledEventExceptionPatchRequestPartial](../../models/components/guildscheduledeventexceptionpatchrequestpartial.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |