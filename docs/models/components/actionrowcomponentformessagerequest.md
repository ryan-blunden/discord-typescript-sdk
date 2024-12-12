# ActionRowComponentForMessageRequest

## Example Usage

```typescript
import { ActionRowComponentForMessageRequest } from "@ryan.blunden/discord/models/components";

let value: ActionRowComponentForMessageRequest = {
  components: [
    {
      customId: "<id>",
      options: [
        {
          label: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `components`                                                 | *components.ActionRowComponentForMessageRequestComponents*[] | :heavy_check_mark:                                           | N/A                                                          |