# SearchGuildMembersResponse

## Example Usage

```typescript
import { SearchGuildMembersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: SearchGuildMembersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |