# GithubWebhook

## Example Usage

```typescript
import { GithubWebhook } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubWebhook = {
  sender: {
    id: 87979,
    login: "Justen.Stroman73",
    htmlUrl: "https://radiant-heartache.org",
    avatarUrl: "https://idealistic-coil.net",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ref`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `refType`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `comment`                                                                  | [components.GithubComment](../../models/components/githubcomment.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `issue`                                                                    | [components.GithubIssue](../../models/components/githubissue.md)           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `pullRequest`                                                              | [components.GithubIssue](../../models/components/githubissue.md)           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repository`                                                               | [components.GithubRepository](../../models/components/githubrepository.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `forkee`                                                                   | [components.GithubRepository](../../models/components/githubrepository.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sender`                                                                   | [components.GithubUser](../../models/components/githubuser.md)             | :heavy_check_mark:                                                         | N/A                                                                        |
| `member`                                                                   | [components.GithubUser](../../models/components/githubuser.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |
| `release`                                                                  | [components.GithubRelease](../../models/components/githubrelease.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `headCommit`                                                               | [components.GithubCommit](../../models/components/githubcommit.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `commits`                                                                  | [components.GithubCommit](../../models/components/githubcommit.md)[]       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `forced`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `compare`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `review`                                                                   | [components.GithubReview](../../models/components/githubreview.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `checkRun`                                                                 | [components.GithubCheckRun](../../models/components/githubcheckrun.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `checkSuite`                                                               | [components.GithubCheckSuite](../../models/components/githubchecksuite.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `discussion`                                                               | [components.GithubDiscussion](../../models/components/githubdiscussion.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `answer`                                                                   | [components.GithubComment](../../models/components/githubcomment.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |