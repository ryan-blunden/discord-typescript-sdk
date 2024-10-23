# BulkUpdateGuildRolesRequest

## Example Usage

```typescript
import { BulkUpdateGuildRolesRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateGuildRolesRequest = {
  guildId: "<value>",
  requestBody: [
    {},
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [operations.BulkUpdateGuildRolesRequestBody](../../models/operations/bulkupdateguildrolesrequestbody.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |