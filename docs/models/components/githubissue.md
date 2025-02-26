# GithubIssue

## Example Usage

```typescript
import { GithubIssue } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubIssue = {
  id: 1663,
  number: 681678,
  htmlUrl: "https://shocked-crocodile.com/",
  user: {
    id: 600556,
    login: "Wilmer50",
    htmlUrl: "https://common-advertisement.info/",
    avatarUrl: "https://wry-information.biz",
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