# UpdateMyUserResponse

## Example Usage

```typescript
import { UpdateMyUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMyUserResponse = {
  headers: {},
  result: {
    id: "<value>",
    username: "Brandt29",
    discriminator: "<value>",
    publicFlags: 744822,
    flags: 128121,
    mfaEnabled: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.UserPIIResponse](../../models/components/userpiiresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |