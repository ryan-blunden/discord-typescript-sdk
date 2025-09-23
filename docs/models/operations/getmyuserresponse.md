# GetMyUserResponse

## Example Usage

```typescript
import { GetMyUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetMyUserResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
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