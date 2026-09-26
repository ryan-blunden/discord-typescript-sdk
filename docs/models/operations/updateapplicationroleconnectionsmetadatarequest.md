# UpdateApplicationRoleConnectionsMetadataRequest

## Example Usage

```typescript
import { UpdateApplicationRoleConnectionsMetadataRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateApplicationRoleConnectionsMetadataRequest = {
  applicationId: "<value>",
  requestBody: [
    {
      type: 7,
      key: "<key>",
      name: "<value>",
      description: "fervently fen acidly unto challenge source",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `requestBody`                                                                                                                          | [components.ApplicationRoleConnectionsMetadataItemRequest](../../models/components/applicationroleconnectionsmetadataitemrequest.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |