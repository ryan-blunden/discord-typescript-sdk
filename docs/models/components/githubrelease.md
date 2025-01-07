# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubRelease = {
  id: 650097,
  tagName: "<value>",
  htmlUrl: "https://peppery-seagull.org",
  author: {
    id: 748256,
    login: "Celestine80",
    htmlUrl: "https://puzzled-ad.com/",
    avatarUrl: "https://submissive-following.info",
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