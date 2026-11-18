# AddLobbyMemberResponse

## Example Usage

```typescript
import { AddLobbyMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: AddLobbyMemberResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    flags: 496280,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.LobbyMemberResponse](../../models/components/lobbymemberresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |