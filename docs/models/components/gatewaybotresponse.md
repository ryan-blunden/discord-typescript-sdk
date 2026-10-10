# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://strict-anticodon.net/",
  sessionStartLimit: {
    maxConcurrency: 445602,
    remaining: 674604,
    resetAfter: 787187,
    total: 471973,
  },
  shards: 486325,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |