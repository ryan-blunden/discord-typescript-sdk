# GithubReview

## Example Usage

```typescript
import { GithubReview } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubReview = {
  user: {
    id: 181673,
    login: "Calista.Abshire91",
    htmlUrl: "https://questionable-cantaloupe.net",
    avatarUrl: "https://royal-gloom.name/",
  },
  htmlUrl: "https://far-off-ethyl.biz",
  state: "Maine",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |