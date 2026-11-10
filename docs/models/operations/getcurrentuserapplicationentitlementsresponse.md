# GetCurrentUserApplicationEntitlementsResponse

## Example Usage

```typescript
import { GetCurrentUserApplicationEntitlementsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetCurrentUserApplicationEntitlementsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EntitlementResponse](../../models/components/entitlementresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |