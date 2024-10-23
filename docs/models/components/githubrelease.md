# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "discord-sdk/models/components";

let value: GithubRelease = {
  id: 310129,
  tagName: "<value>",
  htmlUrl: "https://pertinent-recommendation.net/",
  author: {
    id: 285288,
    login: "Stephon_Reilly93",
    htmlUrl: "https://unripe-soybean.info/",
    avatarUrl: "https://secondary-bar.info/",
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