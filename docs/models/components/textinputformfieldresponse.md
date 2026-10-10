# TextInputFormFieldResponse

## Example Usage

```typescript
import { TextInputFormFieldResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TextInputFormFieldResponse = {
  fieldType: "TERMS",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `fieldType`                                                                                                      | [components.TextInputFormFieldResponseFieldType](../../models/components/textinputformfieldresponsefieldtype.md) | :heavy_check_mark:                                                                                               | Type of form field                                                                                               |
| `label`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Label shown above field                                                                                          |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional helper text shown below label                                                                           |
| `required`                                                                                                       | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether applicant must fill in field                                                                             |
| `placeholder`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Placeholder text shown in empty input                                                                            |
| `response`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Applicant's text response                                                                                        |