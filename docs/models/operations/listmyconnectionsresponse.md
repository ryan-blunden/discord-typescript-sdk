# ListMyConnectionsResponse

## Example Usage

```typescript
import { ListMyConnectionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMyConnectionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.ConnectedAccountResponse](../../models/components/connectedaccountresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |