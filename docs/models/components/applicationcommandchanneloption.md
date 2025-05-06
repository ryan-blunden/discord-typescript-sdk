# ApplicationCommandChannelOption

## Example Usage

```typescript
import { ApplicationCommandChannelOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandChannelOption = {
  name: "<value>",
  description:
    "emphasize unlike decision whenever anenst pish under inure blushing",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `nameLocalizations`                                                  | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `descriptionLocalizations`                                           | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `required`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `channelTypes`                                                       | [components.ChannelTypes](../../models/components/channeltypes.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |