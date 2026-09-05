# PollCreateRequest

## Example Usage

```typescript
import { PollCreateRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: PollCreateRequest = {
  question: {},
  answers: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `question`                                                                                 | [components.PollMedia](../../models/components/pollmedia.md)                               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `answers`                                                                                  | [components.PollAnswerCreateRequest](../../models/components/pollanswercreaterequest.md)[] | :heavy_check_mark:                                                                         | Each of the answers available in the poll, up to 10                                        |
| `allowMultiselect`                                                                         | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether a user can select multiple answers                                                 |
| `layoutType`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | The layout type of the poll. Defaults to... DEFAULT!                                       |
| `duration`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | Number of hours the poll should be open for, up to 32 days. Defaults to 24                 |