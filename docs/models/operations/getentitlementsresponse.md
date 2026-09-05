# GetEntitlementsResponse

## Example Usage

```typescript
import { GetEntitlementsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetEntitlementsResponse = {
  headers: {},
  result: [
    {
      id: "<value>",
      skuId: "<value>",
      applicationId: "<value>",
      userId: "<value>",
      deleted: false,
      startsAt: null,
      endsAt: new Date("2026-11-28T20:56:55.601Z"),
      type: 8,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EntitlementResponse](../../models/components/entitlementresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |