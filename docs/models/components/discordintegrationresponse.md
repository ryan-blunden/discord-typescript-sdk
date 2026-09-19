# DiscordIntegrationResponse

## Example Usage

```typescript
import { DiscordIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: DiscordIntegrationResponse = {
  type: "guild_subscription",
  name: "<value>",
  account: {
    id: "<id>",
    name: null,
  },
  enabled: true,
  id: "<value>",
  application: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
    description: "beside off upon knowledgeable hence king",
    type: 4,
    flags: 233012,
    flagsNew: "<value>",
  },
  scopes: [
    "applications.commands.update",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.DiscordIntegrationResponseType](../../models/components/discordintegrationresponsetype.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `account`                                                                                                    | [components.AccountResponse](../../models/components/accountresponse.md)                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `enabled`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `application`                                                                                                | [components.IntegrationApplicationResponse](../../models/components/integrationapplicationresponse.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `scopes`                                                                                                     | [components.DiscordIntegrationResponseScopes](../../models/components/discordintegrationresponsescopes.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `user`                                                                                                       | [components.UserResponse](../../models/components/userresponse.md)                                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |