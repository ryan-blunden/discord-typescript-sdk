# ApplicationCommandPatchRequestPartial

## Example Usage

```typescript
import { ApplicationCommandPatchRequestPartial } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandPatchRequestPartial = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `nameLocalizations`                                         | Record<string, *string*>                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `descriptionLocalizations`                                  | Record<string, *string*>                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `options`                                                   | *components.ApplicationCommandPatchRequestPartialOptions*[] | :heavy_minus_sign:                                          | N/A                                                         |
| `defaultMemberPermissions`                                  | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `dmPermission`                                              | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |
| `contexts`                                                  | *number*[]                                                  | :heavy_minus_sign:                                          | N/A                                                         |
| `integrationTypes`                                          | *number*[]                                                  | :heavy_minus_sign:                                          | N/A                                                         |
| `handler`                                                   | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |