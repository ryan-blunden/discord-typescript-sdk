# ThreadSearchRequest

## Example Usage

```typescript
import { ThreadSearchRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ThreadSearchRequest = {
  channelId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `slop`             | *number*           | :heavy_minus_sign: | N/A                |
| `minId`            | *string*           | :heavy_minus_sign: | N/A                |
| `maxId`            | *string*           | :heavy_minus_sign: | N/A                |
| `tag`              | *operations.Tag*   | :heavy_minus_sign: | N/A                |
| `tagSetting`       | *string*           | :heavy_minus_sign: | N/A                |
| `archived`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `sortBy`           | *string*           | :heavy_minus_sign: | N/A                |
| `sortOrder`        | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `offset`           | *number*           | :heavy_minus_sign: | N/A                |