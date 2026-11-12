# BulkRemoveInviteTargetUsersRequestBody

## Example Usage

```typescript
import { BulkRemoveInviteTargetUsersRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkRemoveInviteTargetUsersRequestBody = {
  userIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `userIds`                               | *string*[]                              | :heavy_check_mark:                      | The IDs of the users to stop targeting. |