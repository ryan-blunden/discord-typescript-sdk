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
            "since magnificent silent up vamoose microblog because lest kaleidoscopic to",
          emoji: {},
          roleIds: [
            "<value>",
          ],
          channelIds: [
            "<value>",
          ],
        },
      ],
      singleSelect: false,
      required: false,
      inOnboarding: false,
    },
  ],
  defaultChannelIds: [
    "<value>",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `guildId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `prompts`                                                                                    | [components.OnboardingPromptResponse](../../models/components/onboardingpromptresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `defaultChannelIds`                                                                          | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |