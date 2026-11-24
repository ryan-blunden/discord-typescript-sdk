# UpdateVoiceStateRequest

## Example Usage

```typescript
import { UpdateVoiceStateRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateVoiceStateRequest = {
  guildId: "0",
  userId: "0",
  updateVoiceStateRequestPartial: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userId`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updateVoiceStateRequestPartial`                                                                       | [components.UpdateVoiceStateRequestPartial](../../models/components/updatevoicestaterequestpartial.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |