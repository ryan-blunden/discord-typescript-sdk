# BotAddGuildMemberRequest

## Example Usage

```typescript
import { BotAddGuildMemberRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: BotAddGuildMemberRequest = {
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