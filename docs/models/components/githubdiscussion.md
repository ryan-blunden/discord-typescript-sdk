# GithubDiscussion

## Example Usage

```typescript
import { GithubDiscussion } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubDiscussion = {
  title: "<value>",
  number: 520686,
  htmlUrl: "https://caring-postbox.info/",
  user: {
    id: 948639,
    login: "Talon_Hodkiewicz",
    htmlUrl: "https://vain-pine.biz",
    avatarUrl: "https://innocent-precedent.info",
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