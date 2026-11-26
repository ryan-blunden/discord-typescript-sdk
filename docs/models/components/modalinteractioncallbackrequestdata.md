# ModalInteractionCallbackRequestData

## Example Usage

```typescript
import { ModalInteractionCallbackRequestData } from "@ryan.blunden/discord-sdk/models/components";

let value: ModalInteractionCallbackRequestData = {
  customId: "<id>",
  title: "<value>",
  components: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customId`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `title`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `components`                                                 | *components.ModalInteractionCallbackRequestDataComponents*[] | :heavy_check_mark:                                           | N/A                                                          |