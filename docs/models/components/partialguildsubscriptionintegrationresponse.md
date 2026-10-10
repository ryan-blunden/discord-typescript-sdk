# PartialGuildSubscriptionIntegrationResponse

## Example Usage

```typescript
import { PartialGuildSubscriptionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PartialGuildSubscriptionIntegrationResponse = {
  id: "<value>",
  type: "guild_subscription",
  name: "<value>",
  account: {
    id: "<id>",
    name: null,
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | [components.PartialGuildSubscriptionIntegrationResponseType](../../models/components/partialguildsubscriptionintegrationresponsetype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `account`                                                                                                                                | [components.AccountResponse](../../models/components/accountresponse.md)                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |