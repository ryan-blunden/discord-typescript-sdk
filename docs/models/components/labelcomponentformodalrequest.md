# LabelComponentForModalRequest

## Example Usage

```typescript
import { LabelComponentForModalRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: LabelComponentForModalRequest = {
  type: 14,
  label: "<value>",
  component: {
    type: 3,
    customId: "<id>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.LabelComponentForModalRequestType](../../models/components/labelcomponentformodalrequesttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `label`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `component`                                                                                                  | *components.Component*                                                                                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |