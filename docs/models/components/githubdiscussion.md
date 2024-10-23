# GithubDiscussion

## Example Usage

```typescript
import { GithubDiscussion } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubDiscussion = {
  title: "<value>",
  number: 896053,
  htmlUrl: "https://delectable-steeple.name",
  user: {
    id: 106118,
    login: "Elvie60",
    htmlUrl: "https://slushy-brook.biz/",
    avatarUrl: "https://meager-dividend.com/",
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