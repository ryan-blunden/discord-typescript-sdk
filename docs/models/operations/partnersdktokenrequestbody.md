# PartnerSDKTokenRequestBody

## Example Usage

```typescript
import { PartnerSDKTokenRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: PartnerSDKTokenRequestBody = {
  clientId: "<value>",
  externalAuthToken: "<value>",
  externalAuthType: "DISCORD_BOT_ISSUED_ACCESS_TOKEN",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `clientSecret`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `externalAuthToken`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalAuthType`                                                                                               | [components.ApplicationIdentityProviderAuthType](../../models/components/applicationidentityproviderauthtype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |