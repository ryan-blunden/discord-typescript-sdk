# GuildOnboardingResponse

## Example Usage

```typescript
import { GuildOnboardingResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildOnboardingResponse = {
  guildId: "<value>",
  prompts: [],
  defaultChannelIds: [],
  enabled: false,
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