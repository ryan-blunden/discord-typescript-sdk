# UpdateApplicationCommandRequest

## Example Usage

```typescript
import { UpdateApplicationCommandRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateApplicationCommandRequest = {
  applicationId: "0",
  commandId: "0",
  applicationCommandPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `commandId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `applicationCommandPatchRequestPartial`                                                                              | [components.ApplicationCommandPatchRequestPartial](../../models/components/applicationcommandpatchrequestpartial.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |