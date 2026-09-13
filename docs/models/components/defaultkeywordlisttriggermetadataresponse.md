# DefaultKeywordListTriggerMetadataResponse

## Example Usage

```typescript
import { DefaultKeywordListTriggerMetadataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: DefaultKeywordListTriggerMetadataResponse = {
  allowList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  presets: [
    3,
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `allowList`                                                                                  | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `presets`                                                                                    | [components.AutomodKeywordPresetType](../../models/components/automodkeywordpresettype.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |