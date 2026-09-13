# ActionRowComponentResponse

## Example Usage

```typescript
import { ActionRowComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRowComponentResponse = {
  type: 4,
  id: 986061,
  components: [
    {
      type: 14,
      id: 364020,
      style: 2,
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.ActionRowComponentResponseType](../../models/components/actionrowcomponentresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `components`                                                                                           | *components.Components*[]                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |