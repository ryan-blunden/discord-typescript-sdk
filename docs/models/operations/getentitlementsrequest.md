# GetEntitlementsRequest

## Example Usage

```typescript
import { GetEntitlementsRequest } from "@ryan.blunden/discord/models/operations";

let value: GetEntitlementsRequest = {
  applicationId: "<value>",
  skuIds: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `applicationId`     | *string*            | :heavy_check_mark:  | N/A                 |
| `userId`            | *string*            | :heavy_minus_sign:  | N/A                 |
| `skuIds`            | *operations.SkuIds* | :heavy_check_mark:  | N/A                 |
| `guildId`           | *string*            | :heavy_minus_sign:  | N/A                 |
| `before`            | *string*            | :heavy_minus_sign:  | N/A                 |
| `after`             | *string*            | :heavy_minus_sign:  | N/A                 |
| `limit`             | *number*            | :heavy_minus_sign:  | N/A                 |
| `excludeEnded`      | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `excludeDeleted`    | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `onlyActive`        | *boolean*           | :heavy_minus_sign:  | N/A                 |