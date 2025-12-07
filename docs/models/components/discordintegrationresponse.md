# DiscordIntegrationResponse

## Example Usage

```typescript
import { DiscordIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: DiscordIntegrationResponse = {
  account: {
    id: "<id>",
  },
  enabled: false,
  id: "<value>",
  application: {
    id: "<value>",
    name: "<value>",
    description: "despite satirize premium squirm",
  },
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `account`                                                                                              | [components.AccountResponse](../../models/components/accountresponse.md)                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `application`                                                                                          | [components.IntegrationApplicationResponse](../../models/components/integrationapplicationresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `user`                                                                                                 | [components.UserResponse](../../models/components/userresponse.md)                                     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |