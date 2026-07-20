# ConnectedAccountIntegrationResponse

## Example Usage

```typescript
import { ConnectedAccountIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ConnectedAccountIntegrationResponse = {
  id: "<id>",
  type: "discord",
  account: {
    id: "<id>",
    name: null,
  },
  guild: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [components.IntegrationTypes](../../models/components/integrationtypes.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `account`                                                                                            | [components.AccountResponse](../../models/components/accountresponse.md)                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `guild`                                                                                              | [components.ConnectedAccountGuildResponse](../../models/components/connectedaccountguildresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |