# UpdateMyUserResponse

## Example Usage

```typescript
import { UpdateMyUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMyUserResponse = {
  headers: {},
  result: {
    id: "<value>",
    username: "Brandt29",
    avatar: "https://picsum.photos/seed/EygjGViJ/513/3839",
    discriminator: "<value>",
    publicFlags: 974871,
    flags: 620972,
    globalName: null,
    mfaEnabled: false,
    locale: "cs",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.UserPIIResponse](../../models/components/userpiiresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |