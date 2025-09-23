# GetEntitlementResponse

## Example Usage

```typescript
import { GetEntitlementResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetEntitlementResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
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