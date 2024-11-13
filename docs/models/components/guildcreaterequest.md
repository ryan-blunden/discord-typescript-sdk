# GuildCreateRequest

## Example Usage

```typescript
import { GuildCreateRequest } from "@ryan-blunden/discord/models/components";

let value: GuildCreateRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `region`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `icon`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `verificationLevel`                                                                                    | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `defaultMessageNotifications`                                                                          | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `explicitContentFilter`                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `preferredLocale`                                                                                      | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `afkTimeout`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `roles`                                                                                                | [components.CreateGuildRequestRoleItem](../../models/components/createguildrequestroleitem.md)[]       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `channels`                                                                                             | [components.CreateGuildRequestChannelItem](../../models/components/createguildrequestchannelitem.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `afkChannelId`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `systemChannelId`                                                                                      | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `systemChannelFlags`                                                                                   | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |