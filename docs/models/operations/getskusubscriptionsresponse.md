# GetSkuSubscriptionsResponse

## Example Usage

```typescript
import { GetSkuSubscriptionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSkuSubscriptionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      id: "<value>",
      userId: "<value>",
      skuIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      renewalSkuIds: [],
      entitlementIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      currentPeriodStart: new Date("2024-09-12T12:03:47.204Z"),
      currentPeriodEnd: new Date("2024-07-16T04:59:35.879Z"),
      status: 0,
      canceledAt: new Date("2024-05-13T11:51:02.520Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriptionResponse](../../models/components/subscriptionresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |