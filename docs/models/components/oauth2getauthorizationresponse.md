# OAuth2GetAuthorizationResponse

## Example Usage

```typescript
import { OAuth2GetAuthorizationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: OAuth2GetAuthorizationResponse = {
  application: {
    id: "<value>",
    name: "<value>",
    description: "yahoo mmm until poor ick how oily",
    verifyKey: "<value>",
    flags: 804382,
  },
  expires: new Date("2023-04-16T17:51:17.096Z"),
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `application`                                                                                 | [components.ApplicationResponse](../../models/components/applicationresponse.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expires`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopes`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |