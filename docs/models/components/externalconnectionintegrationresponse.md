# ExternalConnectionIntegrationResponse

## Example Usage

```typescript
import { ExternalConnectionIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ExternalConnectionIntegrationResponse = {
  id: "<id>",
  user: {
    id: "<value>",
    username: "Zita_Rosenbaum28",
    discriminator: "<value>",
    publicFlags: 441358,
    flags: 393857,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `account`                                                                                     | [components.AccountResponse](../../models/components/accountresponse.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revoked`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expireBehavior`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expireGracePeriod`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriberCount`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `syncedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roleId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `syncing`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enableEmoticons`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |