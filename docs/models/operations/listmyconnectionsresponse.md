# ListMyConnectionsResponse

## Example Usage

```typescript
import { ListMyConnectionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMyConnectionsResponse = {
  headers: {
    "key": [],
  },
  result: [
    {
      id: "<id>",
      name: "<value>",
      type: "paypal",
      friendSync: false,
      showActivity: true,
      twoWayLink: false,
      verified: true,
      visibility: 0,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.ConnectedAccountResponse](../../models/components/connectedaccountresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |