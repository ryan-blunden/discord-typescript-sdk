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

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `userId1`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `userId2`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `messageId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `requestBody`            | Record<string, *string*> | :heavy_check_mark:       | N/A                      |