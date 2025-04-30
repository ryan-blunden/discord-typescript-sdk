# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://strict-anticodon.net/",
  sessionStartLimit: {
    maxConcurrency: 486325,
    remaining: 876715,
    resetAfter: 874203,
    total: 965192,
  },
  shards: 194387,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |