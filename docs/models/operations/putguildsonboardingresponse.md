# PutGuildsOnboardingResponse

## Example Usage

```typescript
import { PutGuildsOnboardingResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: PutGuildsOnboardingResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    guildId: "<value>",
    prompts: [
      {
        id: "<value>",
        title: "<value>",
        options: [
          {
            id: "<value>",
            title: "<value>",
            description:
              "rapid yum that nautical triangular reward provided cleave tuxedo sheepishly",
            emoji: {
              id: "<value>",
              name: null,
              animated: false,
            },
            roleIds: [],
            channelIds: [
              "<value 1>",
              "<value 2>",
            ],
          },
        ],
        singleSelect: false,
        required: true,
        inOnboarding: false,
        type: 0,
      },
    ],
    defaultChannelIds: [],
    enabled: true,
    mode: 0,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.GuildOnboardingResponse](../../models/components/guildonboardingresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |