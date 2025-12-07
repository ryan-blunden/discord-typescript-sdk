# GetCurrentUserApplicationEntitlementsRequest

## Example Usage

```typescript
import { GetCurrentUserApplicationEntitlementsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetCurrentUserApplicationEntitlementsRequest = {
  applicationId: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `applicationId`               | *string*                      | :heavy_check_mark:            | N/A                           |
| `skuIds`                      | *operations.QueryParamSkuIds* | :heavy_minus_sign:            | N/A                           |
| `excludeConsumed`             | *boolean*                     | :heavy_minus_sign:            | N/A                           |