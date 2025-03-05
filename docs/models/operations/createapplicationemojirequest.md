# CreateApplicationEmojiRequest

## Example Usage

```typescript
import { CreateApplicationEmojiRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateApplicationEmojiRequest = {
  applicationId: "<value>",
  requestBody: {
    name: "<value>",
    image: "https://loremflickr.com/3487/2361?lock=4182646315502159",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `applicationId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.CreateApplicationEmojiRequestBody](../../models/operations/createapplicationemojirequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |