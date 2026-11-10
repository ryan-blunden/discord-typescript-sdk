# UpdateChannelResponse

## Example Usage

```typescript
import { UpdateChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateChannelResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    id: "<value>",
    type: 5,
    flags: 812533,
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
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.UpdateChannelResponseBody* | :heavy_check_mark:                     | N/A                                    |