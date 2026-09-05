# InteractionResponse

## Example Usage

```typescript
import { InteractionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InteractionResponse = {
  id: "<value>",
  type: 3,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.InteractionTypes](../../models/components/interactiontypes.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `activityInstanceId`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `responseMessageId`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `responseMessageLoading`                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `responseMessageEphemeral`                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `channelId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `guildId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |