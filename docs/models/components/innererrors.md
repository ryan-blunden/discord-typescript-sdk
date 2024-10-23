# InnerErrors

## Example Usage

```typescript
import { InnerErrors } from "discord-sdk/models/components";

let value: InnerErrors = {
  errors: [
    {
      code: 929297,
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `errors`                                                 | [components.ErrorT](../../models/components/errort.md)[] | :heavy_check_mark:                                       | The list of errors for this field                        |