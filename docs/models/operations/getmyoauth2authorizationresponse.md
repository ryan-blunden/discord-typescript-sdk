# GetMyOauth2AuthorizationResponse

## Example Usage

```typescript
import { GetMyOauth2AuthorizationResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetMyOauth2AuthorizationResponse = {
  headers: {},
  result: {
    application: {
      id: "<value>",
      name: "<value>",
      icon: "<value>",
      description:
        "inasmuch willow which wobbly bandwidth intensely straight yearningly frugal",
      type: 4,
      verifyKey: "<value>",
      flags: 120777,
      flagsNew: "<value>",
    },
    expires: new Date("2026-05-18T04:25:38.658Z"),
    scopes: [],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.OAuth2GetAuthorizationResponse](../../models/components/oauth2getauthorizationresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |