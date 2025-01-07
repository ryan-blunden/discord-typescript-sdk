# GithubDiscussion

## Example Usage

```typescript
import { GithubDiscussion } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubDiscussion = {
  title: "<value>",
  number: 834476,
  htmlUrl: "https://likable-publication.com/",
  user: {
    id: 367318,
    login: "Consuelo.Rutherford",
    htmlUrl: "https://handsome-juggernaut.org",
    avatarUrl: "https://all-density.biz",
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