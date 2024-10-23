# BulkDeleteMessagesRequest

## Example Usage

```typescript
import { BulkDeleteMessagesRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkDeleteMessagesRequest = {
  channelId: "<value>",
  requestBody: {
    messages: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `channelId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.BulkDeleteMessagesRequestBody](../../models/operations/bulkdeletemessagesrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |