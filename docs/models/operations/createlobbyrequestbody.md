# CreateLobbyRequestBody

## Example Usage

```typescript
import { CreateLobbyRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLobbyRequestBody = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idleTimeoutSeconds`                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `members`                                                                        | [components.LobbyMemberRequest](../../models/components/lobbymemberrequest.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | Record<string, *string*>                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |