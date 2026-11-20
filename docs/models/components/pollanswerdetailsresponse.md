# PollAnswerDetailsResponse

## Example Usage

```typescript
import { PollAnswerDetailsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollAnswerDetailsResponse = {
  users: [
    {
      id: "<value>",
      username: "Alison_Grady",
      avatar: "https://picsum.photos/seed/1X0JOfPHss/886/3879",
      discriminator: "<value>",
      publicFlags: 395066,
      flags: 126615,
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
| `users`                                                              | [components.UserResponse](../../models/components/userresponse.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |