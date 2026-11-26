# DeleteGuildScheduledEventExceptionRequest

## Example Usage

```typescript
import { DeleteGuildScheduledEventExceptionRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: DeleteGuildScheduledEventExceptionRequest = {
  guildId: "0",
  guildScheduledEventId: "0",
  exceptionId: "0",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `guildId`                     | *string*                      | :heavy_check_mark:            | The ID of the guild           |
| `guildScheduledEventId`       | *string*                      | :heavy_check_mark:            | The ID of the scheduled event |
| `exceptionId`                 | *string*                      | :heavy_check_mark:            | The ID of the event exception |