# ListThreadMembersRequest

## Example Usage

```typescript
import { ListThreadMembersRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListThreadMembersRequest = {
  channelId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `withMember`       | *boolean*          | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |