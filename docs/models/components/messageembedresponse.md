# MessageEmbedResponse

## Example Usage

```typescript
import { MessageEmbedResponse } from "@ryan-blunden/discord/models/components";

let value: MessageEmbedResponse = {
  type: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `color`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `timestamp`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `fields`                                                                                           | [components.MessageEmbedFieldResponse](../../models/components/messageembedfieldresponse.md)[]     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `author`                                                                                           | [components.MessageEmbedAuthorResponse](../../models/components/messageembedauthorresponse.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `provider`                                                                                         | [components.MessageEmbedProviderResponse](../../models/components/messageembedproviderresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `image`                                                                                            | [components.MessageEmbedImageResponse](../../models/components/messageembedimageresponse.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `thumbnail`                                                                                        | [components.MessageEmbedImageResponse](../../models/components/messageembedimageresponse.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `video`                                                                                            | [components.MessageEmbedVideoResponse](../../models/components/messageembedvideoresponse.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `footer`                                                                                           | [components.MessageEmbedFooterResponse](../../models/components/messageembedfooterresponse.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |