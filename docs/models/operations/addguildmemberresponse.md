# AddGuildMemberResponse

## Example Usage

```typescript
import { AddGuildMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: AddGuildMemberResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md) | :heavy_minus_sign:                                                               | N/A                                                                              |