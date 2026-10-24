# ChannelSelectComponentResponse

## Example Usage

```typescript
import { ChannelSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ChannelSelectComponentResponse = {
  type: 19,
  id: 833488,
  customId: "<id>",
  minValues: 504832,
  maxValues: 314958,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.ChannelSelectComponentResponseType](../../models/components/channelselectcomponentresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `placeholder`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `minValues`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `maxValues`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `disabled`                                                                                                     | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `channelTypes`                                                                                                 | [components.ChannelTypes](../../models/components/channeltypes.md)[]                                           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultValues`                                                                                                | [components.ChannelSelectDefaultValueResponse](../../models/components/channelselectdefaultvalueresponse.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |