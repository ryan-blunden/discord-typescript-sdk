# ApplicationCommandChannelOptionResponse

## Example Usage

```typescript
import { ApplicationCommandChannelOptionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandChannelOptionResponse = {
  name: "<value>",
  description:
    "key riser mean bravely quantify woot before blah dreamily fooey",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `nameLocalized`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `nameLocalizations`                                                  | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `descriptionLocalized`                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `descriptionLocalizations`                                           | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `required`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `channelTypes`                                                       | [components.ChannelTypes](../../models/components/channeltypes.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |