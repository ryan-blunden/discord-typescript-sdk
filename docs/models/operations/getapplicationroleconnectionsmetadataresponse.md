# GetApplicationRoleConnectionsMetadataResponse

## Example Usage

```typescript
import { GetApplicationRoleConnectionsMetadataResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetApplicationRoleConnectionsMetadataResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `result`                                                                                                                                 | [components.ApplicationRoleConnectionsMetadataItemResponse](../../models/components/applicationroleconnectionsmetadataitemresponse.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |