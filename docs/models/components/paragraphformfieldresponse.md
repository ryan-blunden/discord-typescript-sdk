# ParagraphFormFieldResponse

## Example Usage

```typescript
import { ParagraphFormFieldResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ParagraphFormFieldResponse = {
  fieldType: "MULTIPLE_CHOICE",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `fieldType`                                                                                                      | [components.ParagraphFormFieldResponseFieldType](../../models/components/paragraphformfieldresponsefieldtype.md) | :heavy_check_mark:                                                                                               | Type of form field                                                                                               |
| `label`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Label shown above field                                                                                          |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional helper text shown below label                                                                           |
| `required`                                                                                                       | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether applicant must fill in field                                                                             |
| `placeholder`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Placeholder text shown in empty input                                                                            |
| `response`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Applicant's text response                                                                                        |