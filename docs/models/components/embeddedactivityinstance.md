# EmbeddedActivityInstance

## Example Usage

```typescript
import { EmbeddedActivityInstance } from "@ryan.blunden/discord-sdk/models/components";

let value: EmbeddedActivityInstance = {
  applicationId: "<value>",
  instanceId: "<id>",
  launchId: "<id>",
  users: [],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `applicationId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `instanceId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `launchId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `location`            | *components.Location* | :heavy_minus_sign:    | N/A                   |
| `users`               | *string*[]            | :heavy_check_mark:    | N/A                   |