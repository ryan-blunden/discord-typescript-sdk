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
      description: "instead carelessly quicker ew",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `requestBody`                                                                                                                          | [components.ApplicationRoleConnectionsMetadataItemRequest](../../models/components/applicationroleconnectionsmetadataitemrequest.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |