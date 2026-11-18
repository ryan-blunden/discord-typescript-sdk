# UpdateVoiceStateRequest

## Example Usage

```typescript
import { UpdateVoiceStateRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateVoiceStateRequest = {
  guildId: "<value>",
  userId: "<value>",
  updateVoiceStateRequestPartial: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userId`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updateVoiceStateRequestPartial`                                                                       | [components.UpdateVoiceStateRequestPartial](../../models/components/updatevoicestaterequestpartial.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |