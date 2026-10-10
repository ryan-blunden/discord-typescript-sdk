# GetGuildResponse

## Example Usage

```typescript
import { GetGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildResponse = {
  headers: {},
  result: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
    description: "on uh-huh strange",
    homeHeader: "<value>",
    splash: "<value>",
    discoverySplash: null,
    features: [],
    banner: null,
    ownerId: "<value>",
    applicationId: "<value>",
    region: "<value>",
    afkChannelId: "<value>",
    afkTimeout: 60,
    systemChannelId: "<value>",
    systemChannelFlags: 296921,
    widgetEnabled: true,
    widgetChannelId: "<value>",
    verificationLevel: 4,
    roles: [],
    defaultMessageNotifications: 0,
    mfaLevel: 1,
    explicitContentFilter: 1,
    maxPresences: 78170,
    maxMembers: 465011,
    maxStageVideoChannelUsers: 106928,
    maxVideoChannelUsers: 484173,
    vanityUrlCode: "<value>",
    premiumTier: 2,
    premiumSubscriptionCount: 159974,
    preferredLocale: "he",
    rulesChannelId: "<value>",
    safetyAlertsChannelId: "<value>",
    publicUpdatesChannelId: "<value>",
    premiumProgressBarEnabled: true,
    nsfw: false,
    nsfwLevel: 2,
    emojis: [],
    stickers: [
      {
        id: "<value>",
        name: "<value>",
        tags: "<value>",
        type: 2,
        formatType: 4,
        description:
          "mindless though supposing vainly fortunately wholly eyebrow while yippee",
        available: true,
        guildId: "<value>",
      },
    ],
    incidentsData: null,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.GuildWithCountsResponse](../../models/components/guildwithcountsresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |