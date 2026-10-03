# GetGuildsOnboardingResponse

## Example Usage

```typescript
import { GetGuildsOnboardingResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildsOnboardingResponse = {
  headers: {
    "key": [],
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
    defaultChannelIds: [
      "<value 1>",
      "<value 2>",
    ],
    enabled: false,
    mode: 0,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.UserGuildOnboardingResponse](../../models/components/userguildonboardingresponse.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |