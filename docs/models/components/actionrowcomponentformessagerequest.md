# ActionRowComponentForMessageRequest

## Example Usage

```typescript
import { ActionRowComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRowComponentForMessageRequest = {
  type: 22,
  components: [
    {
      type: 9,
      customId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.ActionRowComponentForMessageRequestType](../../models/components/actionrowcomponentformessagerequesttype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `components`                                                                                                             | *components.ActionRowComponentForMessageRequestComponents*[]                                                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |