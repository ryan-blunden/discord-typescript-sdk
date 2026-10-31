# UserProfileMetadataResponse

## Example Usage

```typescript
import { UserProfileMetadataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserProfileMetadataResponse = {
  keywordFilter: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  regexPatterns: [
    "<value 1>",
    "<value 2>",
  ],
  allowList: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `keywordFilter`    | *string*[]         | :heavy_check_mark: | N/A                |
| `regexPatterns`    | *string*[]         | :heavy_check_mark: | N/A                |
| `allowList`        | *string*[]         | :heavy_check_mark: | N/A                |