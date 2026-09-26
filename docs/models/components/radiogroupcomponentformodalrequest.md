# RadioGroupComponentForModalRequest

## Example Usage

```typescript
import { RadioGroupComponentForModalRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: RadioGroupComponentForModalRequest = {
  type: 1,
  customId: "<id>",
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.RadioGroupComponentForModalRequestType](../../models/components/radiogroupcomponentformodalrequesttype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `customId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `required`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `options`                                                                                                              | [components.RadioGroupOptionForRequest](../../models/components/radiogroupoptionforrequest.md)[]                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |