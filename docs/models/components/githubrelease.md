# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubRelease = {
  id: 739867,
  tagName: "<value>",
  htmlUrl: "https://memorable-tabletop.name/",
  author: {
    id: 535550,
    login: "Antonette_Douglas10",
    htmlUrl: "https://secret-popularity.net/",
    avatarUrl: "https://pleased-jogging.biz",
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