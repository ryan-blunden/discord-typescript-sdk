# ModalSubmitInteractionMetadataResponse

## Example Usage

```typescript
import { ModalSubmitInteractionMetadataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ModalSubmitInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
  },
  triggeringInteractionMetadata: {
    id: "<value>",
    authorizingIntegrationOwners: {
      "key": "<value>",
    },
    interactedMessageId: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `authorizingIntegrationOwners`                                     | Record<string, *string*>                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originalResponseMessageId`                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `triggeringInteractionMetadata`                                    | *components.TriggeringInteractionMetadata*                         | :heavy_check_mark:                                                 | N/A                                                                |