# TermsFormFieldResponse

## Example Usage

```typescript
import { TermsFormFieldResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TermsFormFieldResponse = {
  fieldType: "MULTIPLE_CHOICE",
  values: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `fieldType`                                                                                              | [components.TermsFormFieldResponseFieldType](../../models/components/termsformfieldresponsefieldtype.md) | :heavy_check_mark:                                                                                       | Type of form field                                                                                       |
| `label`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Label shown above field                                                                                  |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional helper text shown below label                                                                   |
| `required`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether applicant must fill in field                                                                     |
| `values`                                                                                                 | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Terms applicant must acknowledge                                                                         |
| `response`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether applicant accepted terms                                                                         |