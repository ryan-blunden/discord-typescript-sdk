# PutGuildsOnboardingResponse

## Example Usage

```typescript
import { PutGuildsOnboardingResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: PutGuildsOnboardingResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
    enabled: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.GuildOnboardingResponse](../../models/components/guildonboardingresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |