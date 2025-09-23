# GetVoiceStateResponse

## Example Usage

```typescript
import { GetVoiceStateResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetVoiceStateResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    deaf: true,
    mute: true,
    suppress: true,
    selfDeaf: false,
    selfMute: false,
    selfVideo: false,
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