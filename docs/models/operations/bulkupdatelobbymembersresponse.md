# BulkUpdateLobbyMembersResponse

## Example Usage

```typescript
import { BulkUpdateLobbyMembersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateLobbyMembersResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      id: "<value>",
      metadata: null,
      flags: 597967,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.LobbyMemberResponse](../../models/components/lobbymemberresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |