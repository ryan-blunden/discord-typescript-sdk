# UpdateGuildRoleResponse

## Example Usage

```typescript
import { UpdateGuildRoleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildRoleResponse = {
  headers: {},
  result: {
    id: "<value>",
    name: "<value>",
    permissions: "<value>",
    position: 919382,
    color: 900550,
    colors: {
      primaryColor: 460839,
      secondaryColor: 709764,
      tertiaryColor: 813540,
    },
    hoist: true,
    managed: false,
    mentionable: true,
    icon: "<value>",
    unicodeEmoji: "<value>",
    flags: 327455,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.GuildRoleResponse](../../models/components/guildroleresponse.md) | :heavy_check_mark:                                                           | N/A                                                                          |