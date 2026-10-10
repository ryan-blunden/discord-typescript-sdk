# UserGuildOnboardingResponse

## Example Usage

```typescript
import { UserGuildOnboardingResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserGuildOnboardingResponse = {
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
    "<value 3>",
  ],
  enabled: true,
  mode: 0,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `guildId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `prompts`                                                                                    | [components.OnboardingPromptResponse](../../models/components/onboardingpromptresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `defaultChannelIds`                                                                          | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `mode`                                                                                       | [components.GuildOnboardingMode](../../models/components/guildonboardingmode.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |