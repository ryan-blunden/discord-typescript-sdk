# BulkRemoveInviteTargetUsersRequest

## Example Usage

```typescript
import { BulkRemoveInviteTargetUsersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkRemoveInviteTargetUsersRequest = {
  code: "<value>",
  requestBody: {
    userIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.BulkRemoveInviteTargetUsersRequestBody](../../models/operations/bulkremoveinvitetargetusersrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |