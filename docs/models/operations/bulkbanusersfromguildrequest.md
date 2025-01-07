# BulkBanUsersFromGuildRequest

## Example Usage

```typescript
import { BulkBanUsersFromGuildRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkBanUsersFromGuildRequest = {
  guildId: "<value>",
  requestBody: {
    userIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [operations.BulkBanUsersFromGuildRequestBody](../../models/operations/bulkbanusersfromguildrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |