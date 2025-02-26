# CreateApplicationEmojiRequest

## Example Usage

```typescript
import { CreateApplicationEmojiRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateApplicationEmojiRequest = {
  applicationId: "<value>",
  requestBody: {
    name: "<value>",
    image: "https://picsum.photos/seed/aKlB0q/1804/68",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `applicationId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.CreateApplicationEmojiRequestBody](../../models/operations/createapplicationemojirequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |