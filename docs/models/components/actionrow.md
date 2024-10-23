# ActionRow

## Example Usage

```typescript
import { ActionRow } from "discord-sdk/models/components";

let value: ActionRow = {
  components: [
    {
      customId: "<id>",
    },
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *number*                           | :heavy_check_mark:                 | N/A                                |
| `components`                       | *components.ActionRowComponents*[] | :heavy_check_mark:                 | N/A                                |