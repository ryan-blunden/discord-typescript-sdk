# GetGuildWelcomeScreenResponse

## Example Usage

```typescript
import { GetGuildWelcomeScreenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWelcomeScreenResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    description:
      "newsletter exactly gadzooks inasmuch ack dead quash heavenly friendly skean",
    welcomeChannels: [],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.GuildWelcomeScreenResponse](../../models/components/guildwelcomescreenresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |