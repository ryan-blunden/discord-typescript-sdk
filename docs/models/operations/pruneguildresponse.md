# PruneGuildResponse

## Example Usage

```typescript
import { PruneGuildResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: PruneGuildResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    pruned: null,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.GuildPruneResponse](../../models/components/guildpruneresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |