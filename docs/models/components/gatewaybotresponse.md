# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://moral-insolence.biz",
  sessionStartLimit: {
    maxConcurrency: 866078,
    remaining: 799857,
    resetAfter: 863575,
    total: 225945,
  },
  shards: 97903,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |