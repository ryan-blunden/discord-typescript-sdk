# GetGuildBanResponse

## Example Usage

```typescript
import { GetGuildBanResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildBanResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    user: {
      id: "<value>",
      username: "Jeffery46",
      discriminator: "<value>",
      publicFlags: 573721,
      flags: 285972,
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.GuildBanResponse](../../models/components/guildbanresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |