# ListMessageReactionsByEmojiResponse

## Example Usage

```typescript
import { ListMessageReactionsByEmojiResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMessageReactionsByEmojiResponse = {
  headers: {},
  result: [
    {
      id: "<value>",
      username: "Kira_Stoltenberg",
      avatar: "https://loremflickr.com/427/2707?lock=1724211668230581",
      discriminator: "<value>",
      publicFlags: 591572,
      flags: 639802,
      globalName: "<value>",
      primaryGuild: {
        identityGuildId: "<value>",
        identityEnabled: false,
        tag: "<value>",
        badge: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.UserResponse](../../models/components/userresponse.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |