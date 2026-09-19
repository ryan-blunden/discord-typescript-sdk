# GetGuildWidgetPngRequest

## Example Usage

```typescript
import { GetGuildWidgetPngRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWidgetPngRequest = {
  guildId: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `guildId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `style`                                                                      | [components.WidgetImageStyles](../../models/components/widgetimagestyles.md) | :heavy_minus_sign:                                                           | shield style widget with Discord icon and guild members online count         |