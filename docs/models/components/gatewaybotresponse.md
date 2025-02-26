# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://lighthearted-bidet.com",
  sessionStartLimit: {
    maxConcurrency: 275608,
    remaining: 798954,
    resetAfter: 255108,
    total: 609429,
  },
  shards: 78381,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |