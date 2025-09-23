# GetGuildWelcomeScreenResponse

## Example Usage

```typescript
import { GetGuildWelcomeScreenResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWelcomeScreenResponse = {
  headers: {},
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