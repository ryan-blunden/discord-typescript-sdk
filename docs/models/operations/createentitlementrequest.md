# CreateEntitlementRequest

## Example Usage

```typescript
import { CreateEntitlementRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateEntitlementRequest = {
  applicationId: "<value>",
  createEntitlementRequestData: {
    skuId: "<value>",
    ownerId: "<value>",
    ownerType: 318614,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createEntitlementRequestData`                                                                     | [components.CreateEntitlementRequestData](../../models/components/createentitlementrequestdata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |