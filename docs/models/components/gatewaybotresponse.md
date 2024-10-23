# GatewayBotResponse

## Example Usage

```typescript
import { GatewayBotResponse } from "discord-sdk/models/components";

let value: GatewayBotResponse = {
  url: "https://blushing-anticodon.name",
  sessionStartLimit: {
    maxConcurrency: 28501,
    remaining: 59552,
    resetAfter: 376341,
    total: 61779,
  },
  shards: 385470,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sessionStartLimit`                                                                                              | [components.GatewayBotSessionStartLimitResponse](../../models/components/gatewaybotsessionstartlimitresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `shards`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |