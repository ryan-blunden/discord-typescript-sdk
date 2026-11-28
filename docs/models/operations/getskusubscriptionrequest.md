# GetSkuSubscriptionRequest

## Example Usage

```typescript
import { GetSkuSubscriptionRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSkuSubscriptionRequest = {
  skuId: "0",
  subscriptionId: "0",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `skuId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | ID of SKU                                                                        |
| `subscriptionId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | ID of the subscription                                                           |
| `userId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | User ID for which to return the subscription. Required except for OAuth queries. |