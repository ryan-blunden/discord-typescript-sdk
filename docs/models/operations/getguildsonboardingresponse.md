# GetGuildsOnboardingResponse

## Example Usage

```typescript
import { GetGuildsOnboardingResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildsOnboardingResponse = {
  headers: {},
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
              animated: true,
            },
            roleIds: [],
            channelIds: [
              "<value 1>",
              "<value 2>",
            ],
          },
        ],
        singleSelect: true,
        required: false,
        inOnboarding: false,
      },
    ],
    defaultChannelIds: [],
    enabled: false,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.UserGuildOnboardingResponse](../../models/components/userguildonboardingresponse.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |