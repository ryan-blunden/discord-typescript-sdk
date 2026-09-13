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
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    type: 0,
    code: "<value>",
    expiresAt: new Date("2025-02-19T21:32:17.588Z"),
    guild: {
      id: "<value>",
      name: "<value>",
      splash: "<value>",
      banner: null,
      description:
        "spattering agitated over victoriously stack ew in absent which brr",
      icon: "<value>",
      features: [
        "DEVELOPER_SUPPORT_SERVER",
      ],
      verificationLevel: 4,
      vanityUrlCode: null,
      nsfwLevel: 0,
      nsfw: null,
      premiumSubscriptionCount: 325878,
    },
    guildId: "<value>",
    channel: {
      id: "<value>",
      type: 4,
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.InviteRevokeResponseBody* | :heavy_check_mark:                    | N/A                                   |