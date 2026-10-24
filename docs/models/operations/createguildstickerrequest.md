# CreateGuildStickerRequest

## Example Usage

```typescript
import { CreateGuildStickerRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildStickerRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    tags: "<value>",
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.CreateGuildStickerRequestBody](../../models/operations/createguildstickerrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |