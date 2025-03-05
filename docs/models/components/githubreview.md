# GithubReview

## Example Usage

```typescript
import { GithubReview } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubReview = {
  user: {
    id: 152850,
    login: "Matilde39",
    htmlUrl: "https://friendly-bathrobe.info/",
    avatarUrl: "https://snappy-cannon.com/",
  },
  htmlUrl: "https://formal-status.net/",
  state: "New Hampshire",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user`                                                         | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |
| `body`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |