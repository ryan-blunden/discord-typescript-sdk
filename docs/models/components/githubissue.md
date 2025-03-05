# GithubIssue

## Example Usage

```typescript
import { GithubIssue } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubIssue = {
  id: 250158,
  number: 71448,
  htmlUrl: "https://courageous-sauerkraut.info",
  user: {
    id: 726449,
    login: "Gordon_Paucek",
    htmlUrl: "https://funny-trench.name",
    avatarUrl: "https://nautical-cheese.biz/",
  },
  title: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `number`                                                       | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `pullRequest`                                                  | *any*                                                          | :heavy_minus_sign:                                             | N/A                                                            |