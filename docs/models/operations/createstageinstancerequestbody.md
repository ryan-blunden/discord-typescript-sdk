# CreateStageInstanceRequestBody

## Example Usage

```typescript
import { CreateStageInstanceRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateStageInstanceRequestBody = {
  topic: "<value>",
  channelId: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `topic`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `channelId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `privacyLevel`          | *number*                | :heavy_minus_sign:      | N/A                     |
| `guildScheduledEventId` | *string*                | :heavy_minus_sign:      | N/A                     |
| `sendStartNotification` | *boolean*               | :heavy_minus_sign:      | N/A                     |