# SeparatorComponentResponse

## Example Usage

```typescript
import { SeparatorComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SeparatorComponentResponse = {
  type: 4,
  id: 766653,
  spacing: 2,
  divider: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.SeparatorComponentResponseType](../../models/components/separatorcomponentresponsetype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `spacing`                                                                                                          | [components.MessageComponentSeparatorSpacingSize](../../models/components/messagecomponentseparatorspacingsize.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `divider`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |