# ChannelFollowerWebhookResponse

## Example Usage

```typescript
import { ChannelFollowerWebhookResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ChannelFollowerWebhookResponse = {
  id: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `avatar`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `channelId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `guildId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `user`                                                                                             | [components.UserResponse](../../models/components/userresponse.md)                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sourceGuild`                                                                                      | [components.WebhookSourceGuildResponse](../../models/components/webhooksourceguildresponse.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sourceChannel`                                                                                    | [components.WebhookSourceChannelResponse](../../models/components/webhooksourcechannelresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |