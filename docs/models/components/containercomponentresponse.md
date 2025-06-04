# ContainerComponentResponse

## Example Usage

```typescript
import { ContainerComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ContainerComponentResponse = {
  id: 963943,
  components: [],
  spoiler: false,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `type`                                              | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `id`                                                | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `accentColor`                                       | *number*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `components`                                        | *components.ContainerComponentResponseComponents*[] | :heavy_check_mark:                                  | N/A                                                 |
| `spoiler`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |