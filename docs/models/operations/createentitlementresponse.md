# CreateEntitlementResponse

## Example Usage

```typescript
import { CreateEntitlementResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateEntitlementResponse = {
  headers: {
    "key": [],
  },
  result: {
    id: "<value>",
    skuId: "<value>",
    applicationId: "<value>",
    userId: "<value>",
    deleted: false,
    startsAt: new Date("2024-03-27T21:21:51.589Z"),
    endsAt: new Date("2025-08-20T21:56:43.685Z"),
    type: 8,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.EntitlementResponse](../../models/components/entitlementresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |