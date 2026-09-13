# CreateApplicationEmojiRequest

## Example Usage

```typescript
import { CreateApplicationEmojiRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateApplicationEmojiRequest = {
  applicationId: "<value>",
  requestBody: {
    name: "<value>",
    image: "https://loremflickr.com/3927/3910?lock=619683604326242",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `applicationId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.CreateApplicationEmojiRequestBody](../../models/operations/createapplicationemojirequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |