# ThreadMetadataResponse

## Example Usage

```typescript
import { ThreadMetadataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadMetadataResponse = {
  archived: false,
  archiveTimestamp: null,
  autoArchiveDuration: 10080,
  locked: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `archived`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `archiveTimestamp`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `autoArchiveDuration`                                                                         | [components.ThreadAutoArchiveDuration](../../models/components/threadautoarchiveduration.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `locked`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createTimestamp`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invitable`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |