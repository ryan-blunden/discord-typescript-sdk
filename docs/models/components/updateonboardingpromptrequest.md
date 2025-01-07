# UpdateOnboardingPromptRequest

## Example Usage

```typescript
import { UpdateOnboardingPromptRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: UpdateOnboardingPromptRequest = {
  title: "<value>",
  options: [
    {
      title: "<value>",
    },
  ],
  id: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `title`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `options`                                                                                              | [components.OnboardingPromptOptionRequest](../../models/components/onboardingpromptoptionrequest.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `singleSelect`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `required`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `inOnboarding`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |