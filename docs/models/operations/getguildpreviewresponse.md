# GetGuildPreviewResponse

## Example Usage

```typescript
import { GetGuildPreviewResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildPreviewResponse = {
  headers: {},
  result: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
    description: "including devoted concerning eek colorfully",
    homeHeader: null,
    splash: null,
    discoverySplash: "<value>",
    features: [],
    approximateMemberCount: 767934,
    approximatePresenceCount: 687059,
    emojis: [],
    stickers: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildPreviewResponse](../../models/components/guildpreviewresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |