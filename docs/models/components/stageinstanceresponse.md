# StageInstanceResponse

## Example Usage

```typescript
import { StageInstanceResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StageInstanceResponse = {
  guildId: "<value>",
  channelId: "<value>",
  topic: "<value>",
  id: "<value>",
  discoverableDisabled: false,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `guildId`               | *string*                | :heavy_check_mark:      | N/A                     |
| `channelId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `topic`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `privacyLevel`          | *number*                | :heavy_check_mark:      | N/A                     |
| `id`                    | *string*                | :heavy_check_mark:      | N/A                     |
| `discoverableDisabled`  | *boolean*               | :heavy_check_mark:      | N/A                     |
| `guildScheduledEventId` | *string*                | :heavy_minus_sign:      | N/A                     |