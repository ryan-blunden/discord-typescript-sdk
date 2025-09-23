# GetEntitlementsResponse

## Example Usage

```typescript
import { GetEntitlementsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetEntitlementsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: [
    {
      id: "<value>",
      skuId: "<value>",
      applicationId: "<value>",
      userId: "<value>",
      deleted: true,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EntitlementResponse](../../models/components/entitlementresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |