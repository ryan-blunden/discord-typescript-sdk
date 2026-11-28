# UploadApplicationAttachmentResponse

## Example Usage

```typescript
import { UploadApplicationAttachmentResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UploadApplicationAttachmentResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    attachment: {
      id: "<value>",
      filename: "example.file",
      size: 885031,
      url: "https://superficial-perp.com",
      proxyUrl: "https://thrifty-dream.org/",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.ActivitiesAttachmentResponse](../../models/components/activitiesattachmentresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |