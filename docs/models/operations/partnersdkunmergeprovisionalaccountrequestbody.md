# PartnerSDKUnmergeProvisionalAccountRequestBody

## Example Usage

```typescript
import { PartnerSDKUnmergeProvisionalAccountRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: PartnerSDKUnmergeProvisionalAccountRequestBody = {
  clientId: "<value>",
  externalAuthToken: "<value>",
  externalAuthType: "EPIC_ONLINE_SERVICES_ID_TOKEN",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `clientSecret`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `externalAuthToken`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalAuthType`                                                                                               | [components.ApplicationIdentityProviderAuthType](../../models/components/applicationidentityproviderauthtype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |