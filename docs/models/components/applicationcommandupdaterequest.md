# ApplicationCommandUpdateRequest

## Example Usage

```typescript
import { ApplicationCommandUpdateRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandUpdateRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `name`                                                | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `nameLocalizations`                                   | Record<string, *string*>                              | :heavy_minus_sign:                                    | N/A                                                   |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `descriptionLocalizations`                            | Record<string, *string*>                              | :heavy_minus_sign:                                    | N/A                                                   |
| `options`                                             | *components.ApplicationCommandUpdateRequestOptions*[] | :heavy_minus_sign:                                    | N/A                                                   |
| `defaultMemberPermissions`                            | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `dmPermission`                                        | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `contexts`                                            | *number*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `integrationTypes`                                    | *number*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `handler`                                             | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `type`                                                | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `id`                                                  | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |