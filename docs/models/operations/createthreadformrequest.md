# CreateThreadFormRequest

## Example Usage

```typescript
import { CreateThreadFormRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateThreadFormRequest = {
  channelId: "<value>",
  requestBody: {
    name: "<value>",
    message: {},
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `channelId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `requestBody`                            | *operations.CreateThreadFormRequestBody* | :heavy_check_mark:                       | N/A                                      |