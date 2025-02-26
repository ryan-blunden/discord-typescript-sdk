# OAuth2GetAuthorizationResponse

## Example Usage

```typescript
import { OAuth2GetAuthorizationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: OAuth2GetAuthorizationResponse = {
  application: {
    id: "<value>",
    name: "<value>",
    description: "gratefully wasteful however vicinity firm",
    verifyKey: "<value>",
    flags: 455444,
  },
  expires: new Date("2024-03-16T06:40:22.205Z"),
  scopes: [
    "<value>",
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