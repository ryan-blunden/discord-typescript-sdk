# ExternalConnectionIntegrationResponse

## Example Usage

```typescript
import { ExternalConnectionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ExternalConnectionIntegrationResponse = {
  type: "guild_subscription",
  name: null,
  account: {
    id: "<id>",
    name: null,
  },
  enabled: false,
  id: "<id>",
  user: {
    id: "<value>",
    username: "Dora.Toy69",
    avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
    discriminator: "<value>",
    publicFlags: 159404,
    flags: 192637,
    globalName: null,
    primaryGuild: {
      identityGuildId: "<value>",
      identityEnabled: false,
      tag: "<value>",
      badge: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.ExternalConnectionIntegrationResponseType](../../models/components/externalconnectionintegrationresponsetype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `account`                                                                                                                    | [components.AccountResponse](../../models/components/accountresponse.md)                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `enabled`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `user`                                                                                                                       | [components.UserResponse](../../models/components/userresponse.md)                                                           | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `revoked`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `expireBehavior`                                                                                                             | [components.IntegrationExpireBehaviorTypes](../../models/components/integrationexpirebehaviortypes.md)                       | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `expireGracePeriod`                                                                                                          | [components.IntegrationExpireGracePeriodTypes](../../models/components/integrationexpiregraceperiodtypes.md)                 | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `subscriberCount`                                                                                                            | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `syncedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `roleId`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `syncing`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `enableEmoticons`                                                                                                            | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |