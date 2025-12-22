# PollAnswerDetailsResponse

## Example Usage

```typescript
import { PollAnswerDetailsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PollAnswerDetailsResponse = {
  users: [
    {
      id: "<value>",
      username: "Alison_Grady",
      discriminator: "<value>",
      publicFlags: 127851,
      flags: 221342,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `users`                                                              | [components.UserResponse](../../models/components/userresponse.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |