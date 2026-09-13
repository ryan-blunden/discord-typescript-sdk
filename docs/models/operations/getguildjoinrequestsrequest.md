# GetGuildJoinRequestsRequest

## Example Usage

```typescript
import { GetGuildJoinRequestsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildJoinRequestsRequest = {
  guildId: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `guildId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_minus_sign:                                     | Applicant started but not yet submitted join request   |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `before`                                               | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `after`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |