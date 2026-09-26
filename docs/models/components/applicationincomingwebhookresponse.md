# ApplicationIncomingWebhookResponse

## Example Usage

```typescript
import { ApplicationIncomingWebhookResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationIncomingWebhookResponse = {
  applicationId: "<value>",
  avatar: "https://picsum.photos/seed/xkEMhQZ/3325/450",
  channelId: null,
  id: "<value>",
  name: "<value>",
  type: 1,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `avatar`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `channelId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `guildId`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [components.ApplicationIncomingWebhookResponseType](../../models/components/applicationincomingwebhookresponsetype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `user`                                                                                                                 | [components.UserResponse](../../models/components/userresponse.md)                                                     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |