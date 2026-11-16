# ApplicationCommandInteractionMetadataResponse

## Example Usage

```typescript
import { ApplicationCommandInteractionMetadataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandInteractionMetadataResponse = {
  id: "<value>",
  type: 6,
  authorizingIntegrationOwners: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | [components.ApplicationCommandInteractionMetadataResponseType](../../models/components/applicationcommandinteractionmetadataresponsetype.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `user`                                                                                                                                       | [components.UserResponse](../../models/components/userresponse.md)                                                                           | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `authorizingIntegrationOwners`                                                                                                               | Record<string, *string*>                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `originalResponseMessageId`                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `targetUser`                                                                                                                                 | [components.UserResponse](../../models/components/userresponse.md)                                                                           | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `targetMessageId`                                                                                                                            | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |