# AddGuildMemberRequestBody

## Example Usage

```typescript
import { AddGuildMemberRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: AddGuildMemberRequestBody = {
  accessToken: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `nick`             | *string*           | :heavy_minus_sign: | N/A                |
| `roles`            | *string*[]         | :heavy_minus_sign: | N/A                |
| `mute`             | *boolean*          | :heavy_minus_sign: | N/A                |
| `deaf`             | *boolean*          | :heavy_minus_sign: | N/A                |
| `accessToken`      | *string*           | :heavy_check_mark: | N/A                |
| `flags`            | *number*           | :heavy_minus_sign: | N/A                |