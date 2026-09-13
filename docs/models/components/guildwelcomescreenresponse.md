# GuildWelcomeScreenResponse

## Example Usage

```typescript
import { GuildWelcomeScreenResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildWelcomeScreenResponse = {
  description:
    "obesity pigsty foolishly failing besides vulgarise at advertisement bogus aw",
  welcomeChannels: [
    {
      channelId: "<value>",
      description: "kick gullible meh orientate forenenst square",
      emojiId: "<value>",
      emojiName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `welcomeChannels`                                                                                              | [components.GuildWelcomeScreenChannelResponse](../../models/components/guildwelcomescreenchannelresponse.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |