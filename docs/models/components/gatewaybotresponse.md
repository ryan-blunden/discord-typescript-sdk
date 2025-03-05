# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://any-synergy.net",
  sessionStartLimit: {
    maxConcurrency: 422444,
    remaining: 265507,
    resetAfter: 184401,
    total: 585645,
  },
  shards: 410239,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |