# ModalInteractionCallbackRequest

## Example Usage

```typescript
import { ModalInteractionCallbackRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ModalInteractionCallbackRequest = {
  type: 4,
  data: {
    customId: "<id>",
    title: "<value>",
    components: [],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.ModalInteractionCallbackRequestType](../../models/components/modalinteractioncallbackrequesttype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `data`                                                                                                           | [components.ModalInteractionCallbackRequestData](../../models/components/modalinteractioncallbackrequestdata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |