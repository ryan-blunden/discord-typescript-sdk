# BulkUpdateLobbyMembersRequest

## Example Usage

```typescript
import { BulkUpdateLobbyMembersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateLobbyMembersRequest = {
  lobbyId: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `lobbyId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [components.BulkLobbyMemberRequest](../../models/components/bulklobbymemberrequest.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |