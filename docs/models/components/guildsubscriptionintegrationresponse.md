# GuildSubscriptionIntegrationResponse

## Example Usage

```typescript
import { GuildSubscriptionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildSubscriptionIntegrationResponse = {
  account: {
    id: "<id>",
  },
  enabled: false,
  id: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `account`                                                                | [components.AccountResponse](../../models/components/accountresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |