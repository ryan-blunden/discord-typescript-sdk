# ConnectedAccountResponse

## Example Usage

```typescript
import { ConnectedAccountResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ConnectedAccountResponse = {
  id: "<id>",
  name: "<value>",
  type: "instagram",
  friendSync: false,
  showActivity: true,
  twoWayLink: true,
  verified: false,
  visibility: 0,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.ConnectedAccountProviders](../../models/components/connectedaccountproviders.md)                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `friendSync`                                                                                                       | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `integrations`                                                                                                     | [components.ConnectedAccountIntegrationResponse](../../models/components/connectedaccountintegrationresponse.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `showActivity`                                                                                                     | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `twoWayLink`                                                                                                       | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `verified`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `visibility`                                                                                                       | [components.ConnectedAccountVisibility](../../models/components/connectedaccountvisibility.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `revoked`                                                                                                          | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |