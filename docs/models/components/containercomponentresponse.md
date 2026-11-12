# ContainerComponentResponse

## Example Usage

```typescript
import { ContainerComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ContainerComponentResponse = {
  type: 23,
  id: 398043,
  accentColor: 54599,
  components: [
    {
      type: 7,
      id: 388461,
      spacing: 2,
      divider: true,
    },
  ],
  spoiler: false,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.ContainerComponentResponseType](../../models/components/containercomponentresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `accentColor`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `components`                                                                                           | *components.ContainerComponentResponseComponents*[]                                                    | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `spoiler`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |