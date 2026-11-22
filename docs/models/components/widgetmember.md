# WidgetMember

## Example Usage

```typescript
import { WidgetMember } from "@ryan.blunden/discord-sdk/models/components";

let value: WidgetMember = {
  id: "<id>",
  username: "Lelah83",
  discriminator: "0000",
  avatar: "https://picsum.photos/seed/LCR6I/3375/1778",
  status: "<value>",
  avatarUrl: "https://blaring-orchid.org/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `username`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `discriminator`                                                        | *"0000"*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `avatar`                                                               | *any*                                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `avatarUrl`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `activity`                                                             | [components.WidgetActivity](../../models/components/widgetactivity.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `deaf`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `mute`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `selfDeaf`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `selfMute`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `suppress`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `channelId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |