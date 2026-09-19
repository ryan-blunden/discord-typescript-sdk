# GetInviteTargetUsersJobStatusResponse

## Example Usage

```typescript
import { GetInviteTargetUsersJobStatusResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetInviteTargetUsersJobStatusResponse = {
  headers: {},
  result: {
    status: 1,
    totalUsers: 845345,
    processedUsers: 87804,
    createdAt: new Date("2026-08-22T17:45:12.756Z"),
    completedAt: new Date("2025-05-17T09:00:30.305Z"),
    errorMessage: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.TargetUsersJobStatusResponse](../../models/components/targetusersjobstatusresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |