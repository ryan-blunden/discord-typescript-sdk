# GithubReview

## Example Usage

```typescript
import { GithubReview } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubReview = {
  user: {
    id: 971760,
    login: "Ruthie_Kertzmann",
    htmlUrl: "https://intent-produce.biz/",
    avatarUrl: "https://unfinished-lox.com",
  },
  htmlUrl: "https://infamous-drug.biz/",
  state: "Missouri",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |