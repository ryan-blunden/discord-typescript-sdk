# PartialExternalConnectionIntegrationResponse

## Example Usage

```typescript
import { PartialExternalConnectionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PartialExternalConnectionIntegrationResponse = {
  id: "<value>",
  type: "discord",
  name: null,
  account: {
    id: "<id>",
    name: null,
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `type`                                                                                                                                     | [components.PartialExternalConnectionIntegrationResponseType](../../models/components/partialexternalconnectionintegrationresponsetype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `account`                                                                                                                                  | [components.AccountResponse](../../models/components/accountresponse.md)                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |