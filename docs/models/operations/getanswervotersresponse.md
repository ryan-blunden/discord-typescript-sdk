# GetAnswerVotersResponse

## Example Usage

```typescript
import { GetAnswerVotersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetAnswerVotersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    users: [
      {
        id: "<value>",
        username: "Alison_Grady",
        discriminator: "<value>",
        publicFlags: 127851,
        flags: 221342,
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.PollAnswerDetailsResponse](../../models/components/pollanswerdetailsresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |