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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.EntitlementResponse](../../models/components/entitlementresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |