# GithubComment

## Example Usage

```typescript
import { GithubComment } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubComment = {
  id: 860470,
  htmlUrl: "https://bowed-in-joke.net/",
  user: {
    id: 316392,
    login: "Sven.Cummings",
    htmlUrl: "https://excellent-tributary.net/",
    avatarUrl: "https://sardonic-abacus.com",
  },
  body: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `commitId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |