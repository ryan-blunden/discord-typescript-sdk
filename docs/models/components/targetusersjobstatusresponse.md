# TargetUsersJobStatusResponse

## Example Usage

```typescript
import { TargetUsersJobStatusResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TargetUsersJobStatusResponse = {
  status: 1,
  totalUsers: 975270,
  processedUsers: 38302,
  createdAt: new Date("2025-03-22T16:18:14.086Z"),
  completedAt: null,
  errorMessage: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.TargetUsersJobStatusTypes](../../models/components/targetusersjobstatustypes.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalUsers`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `processedUsers`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the job was created.                                                       |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the job was successfully completed.                                        |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The error message if the job failed.                                                          |