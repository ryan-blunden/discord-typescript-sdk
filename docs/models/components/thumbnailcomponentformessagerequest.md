# ThumbnailComponentForMessageRequest

## Example Usage

```typescript
import { ThumbnailComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ThumbnailComponentForMessageRequest = {
  media: {
    url: "https://square-fishery.net/",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `spoiler`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `media`                                                                            | [components.UnfurledMediaRequest](../../models/components/unfurledmediarequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |