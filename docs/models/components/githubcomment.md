# GithubComment

## Example Usage

```typescript
import { GithubComment } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubComment = {
  id: 572025,
  htmlUrl: "https://educated-flat.name",
  user: {
    id: 971760,
    login: "Ruthie_Kertzmann",
    htmlUrl: "https://intent-produce.biz/",
    avatarUrl: "https://unfinished-lox.com",
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