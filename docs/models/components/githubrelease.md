# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubRelease = {
  id: 384098,
  tagName: "<value>",
  htmlUrl: "https://unhealthy-patroller.name",
  author: {
    id: 71222,
    login: "Charity.Mueller",
    htmlUrl: "https://round-seafood.net",
    avatarUrl: "https://low-cross-contamination.name",
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