# SocialLayerSKUPurchaseEligibilityCallbackData

## Example Usage

```typescript
import { SocialLayerSKUPurchaseEligibilityCallbackData } from "@ryan.blunden/discord-sdk/models/components";

let value: SocialLayerSKUPurchaseEligibilityCallbackData = {
  eligible: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `eligible`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ineligibleReason`                                                                     | [components.SKUIneligibilityReason](../../models/components/skuineligibilityreason.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `ineligibleReasonDescription`                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |