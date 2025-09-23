# GetGuildResponse

## Example Usage

```typescript
import { GetGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    features: [
      "<value 1>",
    ],
    ownerId: "<value>",
    region: "<value>",
    systemChannelFlags: 330214,
    widgetEnabled: true,
    roles: [
      {
        id: "<value>",
        name: "<value>",
        permissions: "<value>",
        position: 605971,
        color: 203994,
        colors: {
          primaryColor: 296888,
        },
        hoist: true,
        managed: true,
        mentionable: false,
        flags: 25282,
      },
    ],
    maxMembers: 458569,
    maxStageVideoChannelUsers: 56548,
    maxVideoChannelUsers: 199660,
    premiumSubscriptionCount: 864388,
    premiumProgressBarEnabled: false,
    nsfw: false,
    emojis: [
      {
        id: "<value>",
        name: "<value>",
        roles: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        requireColons: true,
        managed: true,
        animated: false,
        available: false,
      },
    ],
    stickers: [
      {
        id: "<value>",
        name: "<value>",
        tags: "<value>",
        available: false,
        guildId: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.GuildWithCountsResponse](../../models/components/guildwithcountsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |