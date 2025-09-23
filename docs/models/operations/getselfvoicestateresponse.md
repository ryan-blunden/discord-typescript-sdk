# GetSelfVoiceStateResponse

## Example Usage

```typescript
import { GetSelfVoiceStateResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSelfVoiceStateResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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