# BulkAddInviteTargetUsersRequestBody

## Example Usage

```typescript
import { BulkAddInviteTargetUsersRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkAddInviteTargetUsersRequestBody = {
  userIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `userIds`                       | *string*[]                      | :heavy_check_mark:              | The IDs of the users to target. |