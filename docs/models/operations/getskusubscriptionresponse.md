# GetSkuSubscriptionResponse

## Example Usage

```typescript
import { GetSkuSubscriptionResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSkuSubscriptionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    userId: "<value>",
    skuIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    renewalSkuIds: [
      "<value 1>",
    ],
    entitlementIds: [],
    currentPeriodStart: new Date("2024-01-27T15:42:52.906Z"),
    currentPeriodEnd: new Date("2026-07-04T20:04:25.298Z"),
    status: 0,
    canceledAt: new Date("2026-01-10T03:25:53.806Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.SubscriptionResponse](../../models/components/subscriptionresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |