# GithubDiscussion

## Example Usage

```typescript
import { GithubDiscussion } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubDiscussion = {
  title: "<value>",
  number: 780639,
  htmlUrl: "https://key-provision.biz",
  user: {
    id: 314759,
    login: "Lonzo.Will77",
    htmlUrl: "https://impressionable-representation.org",
    avatarUrl: "https://dapper-utilization.name",
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