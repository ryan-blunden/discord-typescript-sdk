# GithubDiscussion

## Example Usage

```typescript
import { GithubDiscussion } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubDiscussion = {
  title: "<value>",
  number: 600943,
  htmlUrl: "https://empty-term.net",
  user: {
    id: 971760,
    login: "Ruthie_Kertzmann",
    htmlUrl: "https://intent-produce.biz/",
    avatarUrl: "https://unfinished-lox.com",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `number`                                                       | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `answerHtmlUrl`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |