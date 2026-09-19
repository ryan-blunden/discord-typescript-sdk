# MultipleChoiceFormFieldResponse

## Example Usage

```typescript
import { MultipleChoiceFormFieldResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MultipleChoiceFormFieldResponse = {
  fieldType: "TERMS",
  choices: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fieldType`                                                  | [components.FieldType](../../models/components/fieldtype.md) | :heavy_check_mark:                                           | Type of form field                                           |
| `label`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Label shown above field                                      |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | Optional helper text shown below label                       |
| `required`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Whether applicant must fill in field                         |
| `choices`                                                    | *string*[]                                                   | :heavy_check_mark:                                           | Choices applicant can select from                            |
| `response`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Index of choice selected by applicant                        |