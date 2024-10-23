# ListGuildApplicationCommandsRequest

## Example Usage

```typescript
import { ListGuildApplicationCommandsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildApplicationCommandsRequest = {
  applicationId: "<value>",
  guildId: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `applicationId`     | *string*            | :heavy_check_mark:  | N/A                 |
| `guildId`           | *string*            | :heavy_check_mark:  | N/A                 |
| `withLocalizations` | *boolean*           | :heavy_minus_sign:  | N/A                 |