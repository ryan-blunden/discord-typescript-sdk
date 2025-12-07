# LobbyResponse

## Example Usage

```typescript
import { LobbyResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: LobbyResponse = {
  id: "<value>",
  applicationId: "<value>",
  members: [],
  flags: 694261,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `applicationId`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `metadata`                                                                         | Record<string, *string*>                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `members`                                                                          | [components.LobbyMemberResponse](../../models/components/lobbymemberresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `linkedChannel`                                                                    | [components.GuildChannelResponse](../../models/components/guildchannelresponse.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `flags`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `overrideEventWebhooksUrl`                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |