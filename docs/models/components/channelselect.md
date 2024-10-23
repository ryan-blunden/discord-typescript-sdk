# ChannelSelect

## Example Usage

```typescript
import { ChannelSelect } from "discord-sdk/models/components";

let value: ChannelSelect = {
  customId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `placeholder`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `minValues`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `maxValues`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `defaultValues`                                                                                | [components.ChannelSelectDefaultValue](../../models/components/channelselectdefaultvalue.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `channelTypes`                                                                                 | *number*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |