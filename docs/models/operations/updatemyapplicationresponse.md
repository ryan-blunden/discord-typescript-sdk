# UpdateMyApplicationResponse

## Example Usage

```typescript
import { UpdateMyApplicationResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMyApplicationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    description: "if gust char tomorrow",
    verifyKey: "<value>",
    flags: 221190,
    redirectUris: [
      "https://grouchy-corral.net",
      "https://austere-cope.com/",
      "https://wiggly-language.com",
    ],
    owner: {
      id: "<value>",
      username: "Mercedes92",
      discriminator: "<value>",
      publicFlags: 973280,
      flags: 637876,
    },
    approximateUserInstallCount: 778992,
    approximateUserAuthorizationCount: 754312,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.PrivateApplicationResponse](../../models/components/privateapplicationresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |