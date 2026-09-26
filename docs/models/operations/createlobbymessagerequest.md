# CreateLobbyMessageRequest

## Example Usage

```typescript
import { CreateLobbyMessageRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLobbyMessageRequest = {
  lobbyId: "<value>",
  sdkMessageRequest: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `lobbyId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sdkMessageRequest`                                                          | [components.SDKMessageRequest](../../models/components/sdkmessagerequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |