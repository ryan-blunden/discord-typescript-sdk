# ResourceChannelResponse

## Example Usage

```typescript
import { ResourceChannelResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResourceChannelResponse = {
  channelId: "<value>",
  title: "<value>",
  description: "phew since woot drat",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `channelId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emoji`                                                                              | [components.SettingsEmojiResponse](../../models/components/settingsemojiresponse.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |