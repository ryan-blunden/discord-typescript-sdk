# GithubCheckSuite

## Example Usage

```typescript
import { GithubCheckSuite } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubCheckSuite = {
  headSha: "<value>",
  app: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conclusion`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `headBranch`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `headSha`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pullRequests`                                                                           | [components.GithubCheckPullRequest](../../models/components/githubcheckpullrequest.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `app`                                                                                    | [components.GithubCheckApp](../../models/components/githubcheckapp.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |