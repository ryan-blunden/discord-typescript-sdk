# ChannelFollowerWebhookResponse

## Example Usage

```typescript
import { ChannelFollowerWebhookResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ChannelFollowerWebhookResponse = {
  applicationId: "<value>",
  avatar: "https://picsum.photos/seed/3lifDfQtkg/1989/1233",
  channelId: "<value>",
  id: "<value>",
  name: "<value>",
  type: 3,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `avatar`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `channelId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `guildId`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [components.ChannelFollowerWebhookResponseType](../../models/components/channelfollowerwebhookresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `user`                                                                                                         | [components.UserResponse](../../models/components/userresponse.md)                                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sourceGuild`                                                                                                  | [components.WebhookSourceGuildResponse](../../models/components/webhooksourceguildresponse.md)                 | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sourceChannel`                                                                                                | [components.WebhookSourceChannelResponse](../../models/components/webhooksourcechannelresponse.md)             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |