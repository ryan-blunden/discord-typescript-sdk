# GuildIncomingWebhookResponse

## Example Usage

```typescript
import { GuildIncomingWebhookResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildIncomingWebhookResponse = {
  applicationId: "<value>",
  avatar: "https://loremflickr.com/2669/149?lock=282917638277150",
  channelId: "<value>",
  id: "<value>",
  name: "<value>",
  type: 1,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `avatar`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `channelId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [components.GuildIncomingWebhookResponseType](../../models/components/guildincomingwebhookresponsetype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `user`                                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |