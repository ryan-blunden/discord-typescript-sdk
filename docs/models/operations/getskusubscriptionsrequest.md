# GetSkuSubscriptionsRequest

## Example Usage

```typescript
import { GetSkuSubscriptionsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSkuSubscriptionsRequest = {
  skuId: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `skuId`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | ID of SKU                                                                     |
| `before`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | List subscriptions before this ID                                             |
| `after`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | List subscriptions after this ID                                              |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Number of results to return (1-100)                                           |
| `userId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | User ID for which to return subscriptions. Required except for OAuth queries. |