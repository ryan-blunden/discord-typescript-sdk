# ApplicationCommandResponse

## Example Usage

```typescript
import { ApplicationCommandResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandResponse = {
  id: "<value>",
  applicationId: "<value>",
  version: "<value>",
  name: "<value>",
  description:
    "marketplace minty coin neglect newsprint quizzically grandson incidentally whose",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `applicationId`                                  | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `version`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `defaultMemberPermissions`                       | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `type`                                           | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `nameLocalized`                                  | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `nameLocalizations`                              | Record<string, *string*>                         | :heavy_minus_sign:                               | N/A                                              |
| `description`                                    | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `descriptionLocalized`                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `descriptionLocalizations`                       | Record<string, *string*>                         | :heavy_minus_sign:                               | N/A                                              |
| `guildId`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `dmPermission`                                   | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `contexts`                                       | *number*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `integrationTypes`                               | *number*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `options`                                        | *components.ApplicationCommandResponseOptions*[] | :heavy_minus_sign:                               | N/A                                              |
| `nsfw`                                           | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |