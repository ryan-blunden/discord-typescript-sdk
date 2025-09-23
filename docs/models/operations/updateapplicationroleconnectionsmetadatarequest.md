# UpdateApplicationRoleConnectionsMetadataRequest

## Example Usage

```typescript
import { UpdateApplicationRoleConnectionsMetadataRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateApplicationRoleConnectionsMetadataRequest = {
  applicationId: "<value>",
  requestBody: [
    {
      key: "<key>",
      name: "<value>",
      description:
        "hello blank woot colorize pace entomb as fluffy reconsideration",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `requestBody`                                                                                                                          | [components.ApplicationRoleConnectionsMetadataItemRequest](../../models/components/applicationroleconnectionsmetadataitemrequest.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |