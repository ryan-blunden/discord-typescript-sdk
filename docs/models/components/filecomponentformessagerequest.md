# FileComponentForMessageRequest

## Example Usage

```typescript
import { FileComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: FileComponentForMessageRequest = {
  file: {
    url: "https://naughty-defendant.info/",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `spoiler`                                                                                                                                        | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `file`                                                                                                                                           | [components.UnfurledMediaRequestWithAttachmentReferenceRequired](../../models/components/unfurledmediarequestwithattachmentreferencerequired.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |