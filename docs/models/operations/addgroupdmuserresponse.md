# AddGroupDmUserResponse

## Example Usage

```typescript
import { AddGroupDmUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: AddGroupDmUserResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    type: 0,
    flags: 255134,
    recipients: [
      {
        id: "<value>",
        username: "Delphia.Ferry",
        discriminator: "<value>",
        publicFlags: 948718,
        flags: 542086,
      },
    ],
    ownerId: "<value>",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.AddGroupDmUserResponseBody* | :heavy_check_mark:                      | N/A                                     |