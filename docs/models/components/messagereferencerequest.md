# MessageReferenceRequest

## Example Usage

```typescript
import { MessageReferenceRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageReferenceRequest = {
  messageId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `guildId`          | *string*           | :heavy_minus_sign: | N/A                |
| `channelId`        | *string*           | :heavy_minus_sign: | N/A                |
| `messageId`        | *string*           | :heavy_check_mark: | N/A                |
| `failIfNotExists`  | *boolean*          | :heavy_minus_sign: | N/A                |
| `type`             | *number*           | :heavy_minus_sign: | N/A                |