# CreateDmResponse

## Example Usage

```typescript
import { CreateDmResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateDmResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    type: 0,
    flags: 255134,
    recipients: [
      {
        id: "<value>",
        username: "Delphia.Ferry",
        avatar: "https://picsum.photos/seed/YEPx72ML/2168/1884",
        discriminator: "<value>",
        publicFlags: 936875,
        flags: 646435,
        globalName: "<value>",
        primaryGuild: {
          identityGuildId: "<value>",
          identityEnabled: false,
          tag: "<value>",
          badge: "<value>",
        },
      },
    ],
    name: "<value>",
    icon: "<value>",
    ownerId: "<value>",
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `headers`                         | Record<string, *string*[]>        | :heavy_check_mark:                | N/A                               |
| `result`                          | *operations.CreateDmResponseBody* | :heavy_check_mark:                | N/A                               |