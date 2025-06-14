# BulkLobbyMemberRequest

## Example Usage

```typescript
import { BulkLobbyMemberRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: BulkLobbyMemberRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | Record<string, *string*>                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `flags`                                                                                          | [components.BulkLobbyMemberRequestFlags](../../models/components/bulklobbymemberrequestflags.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `removeMember`                                                                                   | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |