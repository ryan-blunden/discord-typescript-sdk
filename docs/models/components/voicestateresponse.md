# VoiceStateResponse

## Example Usage

```typescript
import { VoiceStateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: VoiceStateResponse = {
  deaf: false,
  mute: false,
  suppress: false,
  selfDeaf: false,
  selfMute: false,
  selfVideo: false,
  sessionId: "<id>",
  userId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `channelId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deaf`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `guildId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mute`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestToSpeakTimestamp`                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `suppress`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfStream`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `selfDeaf`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfMute`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfVideo`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |