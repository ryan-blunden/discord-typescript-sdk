# UpdateGuildResponse

## Example Usage

```typescript
import { UpdateGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    icon: null,
    description: "redress reborn why masticate hm underneath thankfully",
    homeHeader: null,
    splash: "<value>",
    discoverySplash: "<value>",
    features: [
      "VERIFIED",
    ],
    banner: null,
    ownerId: "<value>",
    applicationId: "<value>",
    region: "<value>",
    afkChannelId: "<value>",
    afkTimeout: 1800,
    systemChannelId: null,
    systemChannelFlags: 445084,
    widgetEnabled: false,
    widgetChannelId: "<value>",
    verificationLevel: 3,
    roles: [],
    defaultMessageNotifications: 0,
    mfaLevel: 1,
    explicitContentFilter: 2,
    maxPresences: 451725,
    maxMembers: 720311,
    maxStageVideoChannelUsers: 977945,
    maxVideoChannelUsers: 785454,
    vanityUrlCode: "<value>",
    premiumTier: 1,
    premiumSubscriptionCount: 862945,
    preferredLocale: "fi",
    rulesChannelId: "<value>",
    safetyAlertsChannelId: "<value>",
    publicUpdatesChannelId: "<value>",
    premiumProgressBarEnabled: false,
    nsfw: false,
    nsfwLevel: 2,
    emojis: [
      {
        id: "<value>",
        name: "<value>",
        roles: [
          "<value 1>",
          "<value 2>",
        ],
        requireColons: true,
        managed: true,
        animated: true,
        available: false,
      },
    ],
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
    incidentsData: {
      invitesDisabledUntil: new Date("2026-06-04T08:40:38.832Z"),
      dmsDisabledUntil: new Date("2026-09-21T13:19:40.395Z"),
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.GuildResponse](../../models/components/guildresponse.md) | :heavy_check_mark:                                                   | N/A                                                                  |