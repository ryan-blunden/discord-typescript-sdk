# GithubComment

## Example Usage

```typescript
import { GithubComment } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubComment = {
  id: 596333,
  htmlUrl: "https://extra-large-daughter.info/",
  user: {
    id: 47289,
    login: "Edyth_Mraz74",
    htmlUrl: "https://jittery-fraudster.org",
    avatarUrl: "https://failing-lotion.com",
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