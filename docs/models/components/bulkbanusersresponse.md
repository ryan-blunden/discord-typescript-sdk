# BulkBanUsersResponse

## Example Usage

```typescript
import { BulkBanUsersResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: BulkBanUsersResponse = {
  bannedUsers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  failedUsers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `bannedUsers`      | *string*[]         | :heavy_check_mark: | N/A                |
| `failedUsers`      | *string*[]         | :heavy_check_mark: | N/A                |