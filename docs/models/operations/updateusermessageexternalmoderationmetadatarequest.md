# UpdateUserMessageExternalModerationMetadataRequest

## Example Usage

```typescript
import { UpdateUserMessageExternalModerationMetadataRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateUserMessageExternalModerationMetadataRequest = {
  userId1: "<value>",
  userId2: "<value>",
  messageId: "<value>",
  requestBody: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `userId1`                           | *string*                            | :heavy_check_mark:                  | The ID of the first user in the DM  |
| `userId2`                           | *string*                            | :heavy_check_mark:                  | The ID of the second user in the DM |
| `messageId`                         | *string*                            | :heavy_check_mark:                  | The ID of the message to update     |
| `requestBody`                       | Record<string, *string*>            | :heavy_check_mark:                  | N/A                                 |