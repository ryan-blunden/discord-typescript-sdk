# InviteRevokeResponse

## Example Usage

```typescript
import { InviteRevokeResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: InviteRevokeResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [],
  },
  result: {
    code: "<value>",
    guild: {
      id: "<value>",
      name: "<value>",
      features: [],
      premiumSubscriptionCount: 820218,
    },
    guildId: "<value>",
    channel: {
      id: "<value>",
      type: 2,
    },
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.InviteRevokeResponseBody* | :heavy_check_mark:                    | N/A                                   |