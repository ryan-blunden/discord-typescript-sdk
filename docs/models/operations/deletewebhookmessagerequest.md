# DeleteWebhookMessageRequest

## Example Usage

```typescript
import { DeleteWebhookMessageRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: DeleteWebhookMessageRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `webhookId`        | *string*           | :heavy_check_mark: | N/A                |
| `webhookToken`     | *string*           | :heavy_check_mark: | N/A                |
| `messageId`        | *string*           | :heavy_check_mark: | N/A                |
| `threadId`         | *string*           | :heavy_minus_sign: | N/A                |