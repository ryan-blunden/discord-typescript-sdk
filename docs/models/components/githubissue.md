# GithubIssue

## Example Usage

```typescript
import { GithubIssue } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubIssue = {
  id: 858276,
  number: 691854,
  htmlUrl: "https://severe-phrase.com",
  user: {
    id: 971760,
    login: "Ruthie_Kertzmann",
    htmlUrl: "https://intent-produce.biz/",
    avatarUrl: "https://unfinished-lox.com",
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