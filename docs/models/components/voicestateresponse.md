# VoiceStateResponse

## Example Usage

```typescript
import { VoiceStateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: VoiceStateResponse = {
  channelId: null,
  deaf: false,
  guildId: "<value>",
  mute: true,
  requestToSpeakTimestamp: new Date("2026-02-03T12:23:54.390Z"),
  suppress: false,
  selfStream: false,
  selfDeaf: false,
  selfMute: true,
  selfVideo: false,
  sessionId: "<id>",
  userId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `channelId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deaf`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `guildId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mute`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestToSpeakTimestamp`                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `suppress`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfStream`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfDeaf`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfMute`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selfVideo`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |