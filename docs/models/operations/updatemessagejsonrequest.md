# UpdateMessageJsonRequest

## Example Usage

```typescript
import { UpdateMessageJsonRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMessageJsonRequest = {
  channelId: "<value>",
  messageId: "<value>",
  messageEditRequestPartial: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `channelId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageEditRequestPartial`                                                                  | [components.MessageEditRequestPartial](../../models/components/messageeditrequestpartial.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |