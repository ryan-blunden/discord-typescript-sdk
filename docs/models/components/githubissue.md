# GithubIssue

## Example Usage

```typescript
import { GithubIssue } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubIssue = {
  id: 858276,
  number: 691854,
  htmlUrl: "https://severe-phrase.com",
  user: {
    id: 893452,
    login: "Haley.Kirlin",
    htmlUrl: "https://kaleidoscopic-milestone.info",
    avatarUrl: "https://gummy-illusion.org/",
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