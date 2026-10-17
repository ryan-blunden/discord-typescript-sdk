# FileComponentForMessageRequest

## Example Usage

```typescript
import { FileComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: FileComponentForMessageRequest = {
  type: 17,
  file: {
    url: "https://rigid-import.com/",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [components.FileComponentForMessageRequestType](../../models/components/filecomponentformessagerequesttype.md)                                   | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `id`                                                                                                                                             | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `spoiler`                                                                                                                                        | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `file`                                                                                                                                           | [components.UnfurledMediaRequestWithAttachmentReferenceRequired](../../models/components/unfurledmediarequestwithattachmentreferencerequired.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |