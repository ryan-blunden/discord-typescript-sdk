# BulkBanUsersFromGuildRequest

## Example Usage

```typescript
import { BulkBanUsersFromGuildRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkBanUsersFromGuildRequest = {
  guildId: "<value>",
  bulkBanUsersRequest: {
    userIds: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `guildId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `bulkBanUsersRequest`                                                            | [components.BulkBanUsersRequest](../../models/components/bulkbanusersrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |