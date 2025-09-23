# GetGuildNewMemberWelcomeResponse

## Example Usage

```typescript
import { GetGuildNewMemberWelcomeResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildNewMemberWelcomeResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    guildId: "<value>",
    enabled: true,
    newMemberActions: [],
    resourceChannels: [
      {
        channelId: "<value>",
        title: "<value>",
        description: "swim powerless follower agreement",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.GuildHomeSettingsResponse](../../models/components/guildhomesettingsresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |