# ChannelSelectComponentForMessageRequest

## Example Usage

```typescript
import { ChannelSelectComponentForMessageRequest } from "@ryan.blunden/discord/models/components";

let value: ChannelSelectComponentForMessageRequest = {
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