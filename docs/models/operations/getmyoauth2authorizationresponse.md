# GetMyOauth2AuthorizationResponse

## Example Usage

```typescript
import { GetMyOauth2AuthorizationResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetMyOauth2AuthorizationResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    application: {
      id: "<value>",
      name: "<value>",
      description: "yahoo mmm until poor ick how oily",
      verifyKey: "<value>",
      flags: 804382,
    },
    expires: new Date("2023-05-11T17:22:14.521Z"),
    scopes: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.OAuth2GetAuthorizationResponse](../../models/components/oauth2getauthorizationresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |