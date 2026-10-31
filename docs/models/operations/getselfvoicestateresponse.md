# GetSelfVoiceStateResponse

## Example Usage

```typescript
import { GetSelfVoiceStateResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSelfVoiceStateResponse = {
  headers: {
    "key": [],
  },
  result: {
    channelId: null,
    deaf: true,
    guildId: null,
    mute: false,
    requestToSpeakTimestamp: new Date("2025-11-24T09:55:17.820Z"),
    suppress: false,
    selfStream: false,
    selfDeaf: false,
    selfMute: false,
    selfVideo: true,
    sessionId: "<id>",
    userId: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.VoiceStateResponse](../../models/components/voicestateresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |