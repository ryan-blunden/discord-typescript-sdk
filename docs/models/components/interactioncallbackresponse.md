# InteractionCallbackResponse

## Example Usage

```typescript
import { InteractionCallbackResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InteractionCallbackResponse = {
  interaction: {
    id: "<value>",
    type: 6,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `interaction`                                                                    | [components.InteractionResponse](../../models/components/interactionresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `resource`                                                                       | *components.Resource*                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |