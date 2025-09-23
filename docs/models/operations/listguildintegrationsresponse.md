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
      account: {
        id: "<id>",
      },
      enabled: false,
      id: "<id>",
      user: {
        id: "<value>",
        username: "Jeffery46",
        discriminator: "<value>",
        publicFlags: 573721,
        flags: 285972,
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