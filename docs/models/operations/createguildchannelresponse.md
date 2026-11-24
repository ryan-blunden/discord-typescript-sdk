# CreateGuildChannelResponse

## Example Usage

```typescript
import { CreateGuildChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildChannelResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    type: 7,
    flags: 682410,
    guildId: "<value>",
    name: "<value>",
    position: 144139,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildChannelResponse](../../models/components/guildchannelresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |