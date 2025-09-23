# UpdateApplicationRoleConnectionsMetadataResponse

## Example Usage

```typescript
import { UpdateApplicationRoleConnectionsMetadataResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateApplicationRoleConnectionsMetadataResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      key: "<key>",
      name: "<value>",
      description: "tasty briefly courageously too towards",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `result`                                                                                                                                 | [components.ApplicationRoleConnectionsMetadataItemResponse](../../models/components/applicationroleconnectionsmetadataitemresponse.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |