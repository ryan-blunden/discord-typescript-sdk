# GetGuildJoinRequestsRequest

## Example Usage

```typescript
import { GetGuildJoinRequestsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildJoinRequestsRequest = {
  guildId: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `guildId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [operations.Status](../../models/operations/status.md)         | :heavy_minus_sign:                                             | Filter by application status. Defaults to SUBMITTED if omitted |
| `limit`                                                        | *number*                                                       | :heavy_minus_sign:                                             | Maximum number of join requests to return                      |
| `before`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `after`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |