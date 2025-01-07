# ConnectedAccountIntegrationResponse

## Example Usage

```typescript
import { ConnectedAccountIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ConnectedAccountIntegrationResponse = {
  id: "<id>",
  account: {
    id: "<id>",
  },
  guild: {
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `account`                                                                                            | [components.AccountResponse](../../models/components/accountresponse.md)                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `guild`                                                                                              | [components.ConnectedAccountGuildResponse](../../models/components/connectedaccountguildresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |