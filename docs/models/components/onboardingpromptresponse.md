# OnboardingPromptResponse

## Example Usage

```typescript
import { OnboardingPromptResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: OnboardingPromptResponse = {
  id: "<value>",
  title: "<value>",
  options: [
    {
      id: "<value>",
      title: "<value>",
      description: "silent forsaken reckon",
      emoji: {},
      roleIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      channelIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  singleSelect: false,
  required: true,
  inOnboarding: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `options`                                                                                                | [components.OnboardingPromptOptionResponse](../../models/components/onboardingpromptoptionresponse.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `singleSelect`                                                                                           | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `required`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `inOnboarding`                                                                                           | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |