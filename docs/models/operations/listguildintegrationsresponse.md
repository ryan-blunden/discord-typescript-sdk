# ListGuildIntegrationsResponse

## Example Usage

```typescript
import { ListGuildIntegrationsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildIntegrationsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: [
    {
      type: "guild_subscription",
      name: "<value>",
      account: {
        id: "<id>",
        name: null,
      },
      enabled: false,
      id: "<id>",
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
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `headers`                                        | Record<string, *string*[]>                       | :heavy_check_mark:                               | N/A                                              |
| `result`                                         | *operations.ListGuildIntegrationsResponseBody*[] | :heavy_check_mark:                               | N/A                                              |