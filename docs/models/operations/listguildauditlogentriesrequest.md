# ListGuildAuditLogEntriesRequest

## Example Usage

```typescript
import { ListGuildAuditLogEntriesRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildAuditLogEntriesRequest = {
  guildId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `guildId`          | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_minus_sign: | N/A                |
| `targetId`         | *string*           | :heavy_minus_sign: | N/A                |
| `actionType`       | *number*           | :heavy_minus_sign: | N/A                |
| `before`           | *string*           | :heavy_minus_sign: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |