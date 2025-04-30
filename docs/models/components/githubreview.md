# GithubReview

## Example Usage

```typescript
import { GithubReview } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubReview = {
  user: {
    id: 125132,
    login: "Hassie77",
    htmlUrl: "https://infamous-pliers.com/",
    avatarUrl: "https://unlawful-insolence.org/",
  },
  htmlUrl: "https://long-behest.com/",
  state: "Delaware",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |