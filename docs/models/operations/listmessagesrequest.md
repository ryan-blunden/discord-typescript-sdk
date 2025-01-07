# ListMessagesRequest

## Example Usage

```typescript
import { ListMessagesRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMessagesRequest = {
  channelId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `around`           | *string*           | :heavy_minus_sign: | N/A                |
| `before`           | *string*           | :heavy_minus_sign: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |