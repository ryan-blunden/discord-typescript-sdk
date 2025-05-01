# ContainerComponentForMessageRequest

## Example Usage

```typescript
import { ContainerComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ContainerComponentForMessageRequest = {
  components: [
    {
      file: {
        url: "https://close-accountability.com",
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `accentColor`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `components`                                                 | *components.ContainerComponentForMessageRequestComponents*[] | :heavy_check_mark:                                           | N/A                                                          |
| `spoiler`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |