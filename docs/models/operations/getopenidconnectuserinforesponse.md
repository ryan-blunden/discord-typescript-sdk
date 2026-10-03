# GetOpenidConnectUserinfoResponse

## Example Usage

```typescript
import { GetOpenidConnectUserinfoResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetOpenidConnectUserinfoResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    sub: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [components.OAuth2GetOpenIDConnectUserInfoResponse](../../models/components/oauth2getopenidconnectuserinforesponse.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |