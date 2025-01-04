# OAuth2GetAuthorizationResponse

## Example Usage

```typescript
import { OAuth2GetAuthorizationResponse } from "@ryan.blunden/discord/models/components";

let value: OAuth2GetAuthorizationResponse = {
  application: {
    id: "<value>",
    name: "<value>",
    description: "wherever minus runny rough agreeable beneath unlike vastly",
    verifyKey: "<value>",
    flags: 714242,
  },
  expires: new Date("2025-12-30T17:40:17.979Z"),
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