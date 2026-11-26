# ActionRowComponentForModalRequest

## Example Usage

```typescript
import { ActionRowComponentForModalRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ActionRowComponentForModalRequest = {
  type: 14,
  components: [
    {
      type: 7,
      customId: "<id>",
      style: 2,
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.ActionRowComponentForModalRequestType](../../models/components/actionrowcomponentformodalrequesttype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `components`                                                                                                         | [components.TextInputComponentForModalRequest](../../models/components/textinputcomponentformodalrequest.md)[]       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |