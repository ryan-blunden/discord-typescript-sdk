# ListGuildBansRequest

## Example Usage

```typescript
import { ListGuildBansRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildBansRequest = {
  guildId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `guildId`          | *string*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `before`           | *string*           | :heavy_minus_sign: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |