# ListGuildBansResponse

## Example Usage

```typescript
import { ListGuildBansResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildBansResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      user: {
        id: "<value>",
        username: "Dora.Toy69",
        avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
        discriminator: "<value>",
        publicFlags: 159404,
        flags: 192637,
        globalName: null,
        primaryGuild: {
          identityGuildId: "<value>",
          identityEnabled: false,
          tag: "<value>",
          badge: "<value>",
        },
      },
      reason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.GuildBanResponse](../../models/components/guildbanresponse.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |