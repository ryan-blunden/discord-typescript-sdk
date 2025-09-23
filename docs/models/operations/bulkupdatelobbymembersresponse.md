# BulkUpdateLobbyMembersResponse

## Example Usage

```typescript
import { BulkUpdateLobbyMembersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateLobbyMembersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: [
    {
      id: "<value>",
      flags: 96219,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.LobbyMemberResponse](../../models/components/lobbymemberresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |