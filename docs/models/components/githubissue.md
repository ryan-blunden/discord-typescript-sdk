# GithubIssue

## Example Usage

```typescript
import { GithubIssue } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubIssue = {
  id: 50532,
  number: 288267,
  htmlUrl: "https://bossy-crocodile.org/",
  user: {
    id: 896280,
    login: "Kaci_Kohler94",
    htmlUrl: "https://awful-formation.info/",
    avatarUrl: "https://useless-spirit.net/",
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