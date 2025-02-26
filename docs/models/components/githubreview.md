# GithubReview

## Example Usage

```typescript
import { GithubReview } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubReview = {
  user: {
    id: 140289,
    login: "Savanah79",
    htmlUrl: "https://baggy-shoulder.com",
    avatarUrl: "https://jumbo-lace.biz/",
  },
  htmlUrl: "https://splendid-dredger.net/",
  state: "Alabama",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |