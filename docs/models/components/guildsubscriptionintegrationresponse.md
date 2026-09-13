# GuildSubscriptionIntegrationResponse

## Example Usage

```typescript
import { GuildSubscriptionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildSubscriptionIntegrationResponse = {
  type: "youtube",
  name: "<value>",
  account: {
    id: "<id>",
    name: null,
  },
  enabled: false,
  id: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [components.GuildSubscriptionIntegrationResponseType](../../models/components/guildsubscriptionintegrationresponsetype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `account`                                                                                                                  | [components.AccountResponse](../../models/components/accountresponse.md)                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `enabled`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |