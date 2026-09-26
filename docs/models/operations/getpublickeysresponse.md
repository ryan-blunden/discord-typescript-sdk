# GetPublicKeysResponse

## Example Usage

```typescript
import { GetPublicKeysResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetPublicKeysResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    keys: [],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.OAuth2GetKeys](../../models/components/oauth2getkeys.md) | :heavy_check_mark:                                                   | N/A                                                                  |