# NewMemberActionResponse

## Example Usage

```typescript
import { NewMemberActionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: NewMemberActionResponse = {
  channelId: "<value>",
  actionType: 1,
  title: "<value>",
  description: "ugh hm dull apropos alongside icy unibody ack",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `channelId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `actionType`                                                                         | [components.NewMemberActionType](../../models/components/newmemberactiontype.md)     | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emoji`                                                                              | [components.SettingsEmojiResponse](../../models/components/settingsemojiresponse.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |