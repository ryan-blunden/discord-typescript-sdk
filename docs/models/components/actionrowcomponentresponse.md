# ActionRowComponentResponse

## Example Usage

```typescript
import { ActionRowComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRowComponentResponse = {
  id: 158862,
  components: [
    {
      id: 142067,
      customId: "<id>",
    },
  ],
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *number*                  | :heavy_check_mark:        | N/A                       |
| `id`                      | *number*                  | :heavy_check_mark:        | N/A                       |
| `components`              | *components.Components*[] | :heavy_check_mark:        | N/A                       |