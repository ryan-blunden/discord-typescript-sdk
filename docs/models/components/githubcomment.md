# GithubComment

## Example Usage

```typescript
import { GithubComment } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubComment = {
  id: 721090,
  htmlUrl: "https://elementary-digit.biz",
  user: {
    id: 495842,
    login: "Alysha81",
    htmlUrl: "https://official-hundred.info/",
    avatarUrl: "https://querulous-director.name",
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