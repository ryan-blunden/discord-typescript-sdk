# UpdateLobbyMessageExternalModerationMetadataRequest

## Example Usage

```typescript
import { UpdateLobbyMessageExternalModerationMetadataRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateLobbyMessageExternalModerationMetadataRequest = {
  lobbyId: "<value>",
  messageId: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `lobbyId`                             | *string*                              | :heavy_check_mark:                    | The ID of the lobby the message is in |
| `messageId`                           | *string*                              | :heavy_check_mark:                    | The ID of the message to update       |
| `requestBody`                         | Record<string, *string*>              | :heavy_check_mark:                    | N/A                                   |