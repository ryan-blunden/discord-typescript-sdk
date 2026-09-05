# GetBotGatewayResponse

## Example Usage

```typescript
import { GetBotGatewayResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetBotGatewayResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    url: "https://rubbery-convection.info/",
    sessionStartLimit: {
      maxConcurrency: 445602,
      remaining: 674604,
      resetAfter: 787187,
      total: 471973,
    },
    shards: 54876,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.GatewayBotResponse](../../models/components/gatewaybotresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |