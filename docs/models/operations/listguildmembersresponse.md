# ListGuildMembersResponse

## Example Usage

```typescript
import { ListGuildMembersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildMembersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |