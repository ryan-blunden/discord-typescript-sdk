# UpdateGuildResponse

## Example Usage

```typescript
import { UpdateGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildResponse = {
  headers: {},
  result: {
    id: "<value>",
    name: "<value>",
    features: [],
    ownerId: "<value>",
    region: "<value>",
    systemChannelFlags: 882133,
    widgetEnabled: false,
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
    maxMembers: 570156,
    maxStageVideoChannelUsers: 927978,
    maxVideoChannelUsers: 733389,
    premiumSubscriptionCount: 602017,
    premiumProgressBarEnabled: true,
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.GuildResponse](../../models/components/guildresponse.md) | :heavy_check_mark:                                                   | N/A                                                                  |