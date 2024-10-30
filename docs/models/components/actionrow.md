# ActionRow

## Example Usage

```typescript
import { ActionRow } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRow = {
  components: [
    {
      customId: "<id>",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *number*                           | :heavy_check_mark:                 | N/A                                |
| `components`                       | *components.ActionRowComponents*[] | :heavy_check_mark:                 | N/A                                |