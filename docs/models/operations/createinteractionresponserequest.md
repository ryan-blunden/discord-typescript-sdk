# CreateInteractionResponseRequest

## Example Usage

```typescript
import { CreateInteractionResponseRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateInteractionResponseRequest = {
  interactionId: "<value>",
  interactionToken: "<value>",
  requestBody: {
    type: 8,
    data: {},
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `interactionId`                                                         | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `interactionToken`                                                      | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `withResponse`                                                          | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `requestBody`                                                           | *operations.CreateInteractionResponseRequestApplicationJSONRequestBody* | :heavy_check_mark:                                                      | N/A                                                                     |