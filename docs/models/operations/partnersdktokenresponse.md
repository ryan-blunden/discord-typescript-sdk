# PartnerSDKTokenResponse

## Example Usage

```typescript
import { PartnerSDKTokenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: PartnerSDKTokenResponse = {
  headers: {},
  result: {
    tokenType: "<value>",
    accessToken: "<value>",
    expiresIn: 308619,
    scope: "<value>",
    idToken: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.ProvisionalTokenResponse](../../models/components/provisionaltokenresponse.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |