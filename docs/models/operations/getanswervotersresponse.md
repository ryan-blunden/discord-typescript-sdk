# GetAnswerVotersResponse

## Example Usage

```typescript
import { GetAnswerVotersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetAnswerVotersResponse = {
  headers: {
    "key": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.PollAnswerDetailsResponse](../../models/components/pollanswerdetailsresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |