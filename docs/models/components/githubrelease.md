# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubRelease = {
  id: 412524,
  tagName: "<value>",
  htmlUrl: "https://fair-plumber.name/",
  author: {
    id: 121403,
    login: "Sophie.Moen",
    htmlUrl: "https://international-runway.info/",
    avatarUrl: "https://minor-cope.biz/",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `tagName`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `htmlUrl`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `author`                                                       | [components.GithubUser](../../models/components/githubuser.md) | :heavy_check_mark:                                             | N/A                                                            |