# MessageInteractionResponse

## Example Usage

```typescript
import { MessageInteractionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageInteractionResponse = {
  id: "<value>",
  type: 4,
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.InteractionTypes](../../models/components/interactiontypes.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `user`                                                                     | [components.UserResponse](../../models/components/userresponse.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `nameLocalized`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |