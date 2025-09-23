# UpdateGuildWelcomeScreenResponse

## Example Usage

```typescript
import { UpdateGuildWelcomeScreenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildWelcomeScreenResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    welcomeChannels: [
      {
        channelId: "<value>",
        description:
          "newsletter exactly gadzooks inasmuch ack dead quash heavenly friendly skean",
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.GuildWelcomeScreenResponse](../../models/components/guildwelcomescreenresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |