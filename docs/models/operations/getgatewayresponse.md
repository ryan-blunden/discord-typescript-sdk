# GetGatewayResponse

## Example Usage

```typescript
import { GetGatewayResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGatewayResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    url: "https://robust-importance.info/",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.GatewayResponse](../../models/components/gatewayresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |