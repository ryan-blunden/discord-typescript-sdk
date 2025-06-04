# ActionRowComponentForMessageRequest

## Example Usage

```typescript
import { ActionRowComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRowComponentForMessageRequest = {
  components: [
    {
      customId: "<id>",
      options: [],
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `components`                                                 | *components.ActionRowComponentForMessageRequestComponents*[] | :heavy_check_mark:                                           | N/A                                                          |