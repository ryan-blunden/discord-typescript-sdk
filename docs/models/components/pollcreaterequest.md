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
| `answers`                                                                                  | [components.PollAnswerCreateRequest](../../models/components/pollanswercreaterequest.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `allowMultiselect`                                                                         | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `layoutType`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `duration`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |