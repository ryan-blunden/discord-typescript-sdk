# SubscriptionResponse

## Example Usage

```typescript
import { SubscriptionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SubscriptionResponse = {
  id: "<value>",
  userId: "<value>",
  skuIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  renewalSkuIds: null,
  entitlementIds: [
    "<value 1>",
    "<value 2>",
  ],
  currentPeriodStart: new Date("2024-02-28T02:37:17.298Z"),
  currentPeriodEnd: new Date("2024-12-02T10:23:26.871Z"),
  status: 1,
  canceledAt: new Date("2025-09-28T14:10:17.724Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userId`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `skuIds`                                                                                               | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | List of SKUs subscribed to                                                                             |
| `renewalSkuIds`                                                                                        | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | List of SKUs that this user will be subscribed to at renewal                                           |
| `entitlementIds`                                                                                       | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | List of entitlements granted for this subscription                                                     |
| `currentPeriodStart`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Start of the current subscription period                                                               |
| `currentPeriodEnd`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | End of the current subscription period                                                                 |
| `status`                                                                                               | [components.SubscriptionResponseStatusType](../../models/components/subscriptionresponsestatustype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `canceledAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | When the subscription was canceled                                                                     |
| `country`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | ISO3166-1 alpha-2 country code of the payment source used to purchase the subscription                 |