# GithubComment

## Example Usage

```typescript
import { GithubComment } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubComment = {
  id: 576331,
  htmlUrl: "https://experienced-verve.name",
  user: {
    id: 728387,
    login: "Osvaldo86",
    htmlUrl: "https://those-tabletop.biz/",
    avatarUrl: "https://slushy-minority.com/",
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