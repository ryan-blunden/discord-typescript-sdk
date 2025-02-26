# GithubRelease

## Example Usage

```typescript
import { GithubRelease } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubRelease = {
  id: 610443,
  tagName: "<value>",
  htmlUrl: "https://brilliant-folklore.name/",
  author: {
    id: 627709,
    login: "Sherman.Braun41",
    htmlUrl: "https://early-giant.name",
    avatarUrl: "https://ragged-nightlife.org/",
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